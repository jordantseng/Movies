import { SEARCH_MOVIES } from '../Actions/types';

const initialState = [];
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_MOVIES:
      return [...payload];
    default:
      return state;
  }
};
