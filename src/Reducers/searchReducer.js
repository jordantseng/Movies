const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SEARCH_MOVIES':
      return [...payload];
    default:
      return state;
  }
};
