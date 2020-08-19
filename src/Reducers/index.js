import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import moviesReducer from './moviesReducer';
import pageReducer from './pageReducer';

export default combineReducers({
  searchResults: searchReducer,
  movies: moviesReducer,
  page: pageReducer,
});
