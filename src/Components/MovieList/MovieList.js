import React from 'react';
import { Row } from 'react-bootstrap';
import MovieItem from '../../Components/MovieItem/MovieItem';

const MovieList = ({ pageTitle, movies }) => {
  return (
    <div>
      <Row className="d-flex my-5">
        <h1 className="mx-auto">{pageTitle}</h1>
      </Row>
      <Row>
        {movies.map(
          ({ id, title, release_date, vote_average, poster_path }) => (
            <MovieItem
              key={id}
              id={id}
              title={title}
              release_date={release_date}
              vote_average={vote_average}
              img={poster_path}
            />
          )
        )}
      </Row>
    </div>
  );
};

export default MovieList;
