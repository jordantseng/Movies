import { FETCH_PAGE } from '../Actions/types';

const initialState = {};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PAGE:
      return { ...payload };

    default:
      return state;
  }
};
