import React, { useState, useEffect, useRef } from 'react';
import moviesService from '../../Services/moviesService';
import { Container } from 'react-bootstrap';
import MovieList from '../../Components/MovieList/MovieList';
import ReactPaginate from 'react-paginate';

const NowPlaying = () => {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    moviesService.getMovies('now_playing', currentPage).then(res => {
      if (isMounted.current) {
        setPageCount(res.total_pages);
        setCurrentPage(res.page);
        setMovies(res.results);
      }
    });
    return () => {
      isMounted.current = false;
    };
  }, [currentPage]);

  return (
    <Container>
      <MovieList pageTitle="Now Playing" movies={movies} />
      <div className="d-flex justify-content-center my-4">
        <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={10}
          marginPagesDisplayed={5}
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          activeClassName="active"
          activeLinkClassName="active"
          previousClassName="page-link"
          nextClassName="page-link"
          onPageChange={page => setCurrentPage(page.selected + 1)}
        />
      </div>
    </Container>
  );
};

export default NowPlaying;
