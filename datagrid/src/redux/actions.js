import {
  CHANGE_SORT,
  CHANGE_SEARCH_QUERY,
  CHANGE_FILTER,
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

export {
  changeSort,
  changeSearchQquery,
  changeFilter,
};
