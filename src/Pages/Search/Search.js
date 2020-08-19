import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieList from '../../Components/MovieList/MovieList';
import ReactPaginate from 'react-paginate';
import { Container } from 'react-bootstrap';
import { searchMovies } from '../../Actions';

const Search = props => {
  const movies = useSelector(state => state.searchResults);
  const page = useSelector(state => state.page);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const searchTerm = props.match.params.searchTerm;

    dispatch(searchMovies(searchTerm, currentPage));
  }, [dispatch, props.match.params.searchTerm, currentPage]);

  return (
    <Container>
      <MovieList pageTitle="Search Results" movies={movies} />
      <div className="d-flex justify-content-center my-4">
        <ReactPaginate
          pageCount={page.total_pages}
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

export default Search;
