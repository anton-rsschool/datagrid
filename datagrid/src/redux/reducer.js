import {
  CHANGE_SORT,
  CHANGE_SEARCH_QUERY,
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
    default:
      return state;
  }
};

export default reducer;
