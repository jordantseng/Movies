import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../Actions';

export const useFetchMovies = pageTitle => {
  const isMounted = useRef(false);
  const [currentPage, setCurrentPage] = useState(1);
  const movies = useSelector(state => state.movies);
  const { total_pages } = useSelector(state => state.page);
  const dispatch = useDispatch();

  useEffect(() => {
    isMounted.current = true;
    if (isMounted.current) {
      dispatch(fetchMovies(pageTitle, currentPage));
    }

    return () => {
      isMounted.current = false;
    };
  }, [pageTitle, currentPage, dispatch]);

  return [movies, total_pages, setCurrentPage];
};
