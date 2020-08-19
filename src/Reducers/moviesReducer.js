const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_MOVIES':
      return [...payload];

    default:
      return state;
  }
};
