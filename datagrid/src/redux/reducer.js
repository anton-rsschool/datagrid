import {
  CHANGE_SORT,
  CHANGE_SEARCH_QUERY,
  CHANGE_FILTER,
  SELECT_ROW,
  DELETE_ROW,
  CHANGE_VISIBLE_COLUMNS,
} from './actionsTypes';

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_SORT: {
      const { sort } = state;
      const { field, isPressedShift } = action.payload;
      const SORT_ORDER = {
        asc: 'desc',
        desc: 'not',
        not: 'asc',
      };
      let newSort = null;
      const cloneSort = isPressedShift === true ? { ...sort } : {};
      if (field in sort) {
        const order = sort[field];
        const newOrder = SORT_ORDER[order];
        if (newOrder === 'not') {
          delete cloneSort[field];
          newSort = cloneSort;
        } else {
          newSort = { ...cloneSort, [field]: newOrder };
        }
      } else {
        newSort = { ...cloneSort, [field]: 'asc' };
      }
      return { ...state, sort: newSort };
    }
    case CHANGE_SEARCH_QUERY: {
      const searchQuery = action.payload;
      const { query, fields } = searchQuery;
      const isQuery = query !== '' && fields;
      const newSearchQuery = isQuery ? searchQuery : null;
      return { ...state, searchQuery: newSearchQuery };
    }
    case CHANGE_FILTER: {
      const { field, values } = action.payload;
      const { filters } = state;
      const newFilters = { ...filters };
      if (field in filters && values.length === 0) {
        delete newFilters[field];
      } else {
        newFilters[field] = values;
      }
      return { ...state, filters: newFilters };
    }
    case SELECT_ROW: {
      const { elements, lastSel } = action.payload;
      const { selectedRows } = state;
      const newSelectedRow = { ...selectedRows };
      const isDelete = elements.every((item) => item in newSelectedRow);
      if (isDelete) {
        elements.forEach((el) => delete newSelectedRow[el]);
      } else {
        elements.forEach((el) => { newSelectedRow[el] = true; });
      }
      return { ...state, selectedRows: newSelectedRow, lastSelectedRow: lastSel };
    }
    case DELETE_ROW: {
      const { data, selectedRows } = state;
      const idList = Object.keys(selectedRows);
      const newData = data.slice();
      idList.forEach((id) => {
        const index = newData.findIndex((item) => item.id === id);
        newData.splice(index, 1);
      });
      return {
        ...state, data: newData, selectedRows: {}, lastSelectedRow: null,
      };
    }
    case CHANGE_VISIBLE_COLUMNS: {
      const { payload } = action;
      return { ...state, visibleColumns: payload };
    }
    default:
      return state;
  }
};

export default reducer;
