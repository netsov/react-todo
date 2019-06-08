import { SEARCH } from '../actionTypes';

export const search = (state = '', action) => {
  switch (action.type) {
    case SEARCH:
      return action.search;
    default:
      return state;
  }
};
