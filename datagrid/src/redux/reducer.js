import {
  CHANGE_SORT,
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
    default:
      return state;
  }
};

export default reducer;
