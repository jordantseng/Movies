import React from 'react';
import { Container } from 'react-bootstrap';
import MovieList from '../../Components/MovieList/MovieList';
import ReactPaginate from 'react-paginate';
import { useFetchMovies } from '../../hooks/useFetchMovies';
import Loader from '../../Components/Loader/Loader';
const TopRated = () => {
  const [movies, pageCount, setCurrentPage] = useFetchMovies('top_rated');
  
  if (movies.length < 1) {
    return <Loader />;
  }
  return (
    <Container>
      <MovieList pageTitle="Top Rated" movies={movies} />
      <div className="d-flex justify-content-center my-4">
        <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
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

export default TopRated;
