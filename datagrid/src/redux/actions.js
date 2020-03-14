import {
  CHANGE_SORT,
} from './actionsTypes';

const changeSort = (payload) => (
  {
    type: CHANGE_SORT,
    payload
  }
);

export {
  changeSort,
};
