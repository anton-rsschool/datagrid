import {
  CHANGE_SORT,
  CHANGE_SEARCH_QUERY,
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

export {
  changeSort,
  changeSearchQquery,
};
