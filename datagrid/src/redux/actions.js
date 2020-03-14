import {
  CHANGE_SORT,
  CHANGE_SEARCH_QUERY,
  CHANGE_FILTER,
  SELECT_ROW,
  DELETE_ROW,
  CHANGE_VISIBLE_COLUMNS,
} from './actionsTypes';

const changeSort = (payload) => (
  {
    type: CHANGE_SORT,
    payload,
  }
);

const changeSearchQquery = (payload) => (
  {
    type: CHANGE_SEARCH_QUERY,
    payload,
  }
);

const changeFilter = (payload) => (
  {
    type: CHANGE_FILTER,
    payload,
  }
);

const selectRow = (payload) => (
  {
    type: SELECT_ROW,
    payload,
  }
);

const deleteRow = (payload) => (
  {
    type: DELETE_ROW,
    payload,
  }
);

const changeVisibleColumns = (payload) => (
  {
    type: CHANGE_VISIBLE_COLUMNS,
    payload,
  }
);

export {
  changeSort,
  changeSearchQquery,
  changeFilter,
  selectRow,
  deleteRow,
  changeVisibleColumns,
};
