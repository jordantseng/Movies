import moviesService from '../Services/moviesService';
import history from '../history';

export const searchMovies = (searchTerm, currentPage) => async (
  dispatch,
  getState
) => {
  const {
    results,
    page,
    total_results,
    total_pages,
  } = await moviesService.getSearch(searchTerm, currentPage);

  dispatch({ type: 'SEARCH_MOVIES', payload: results });
  dispatch({
    type: 'FETCH_PAGE',
    payload: { page, total_results, total_pages },
  });
  history.push(`/search/${searchTerm}`);
};

export const fetchMovies = (pageTitle, currentPage) => async (
  dispatch,
  getState
) => {
  const {
    results,
    page,
    total_results,
    total_pages,
  } = await moviesService.getMovies(pageTitle, currentPage);

  dispatch({ type: 'FETCH_MOVIES', payload: results });
  dispatch({
    type: 'FETCH_PAGE',
    payload: { page, total_results, total_pages },
  });
};
