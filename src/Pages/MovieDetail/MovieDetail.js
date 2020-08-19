import React, { useEffect, useState } from 'react';
import moviesService from '../../Services/moviesService';
import { genres } from '../../Services/utilService';
import Youtube from 'react-youtube';
import { Container, Row, Col, Image, ListGroup, Badge } from 'react-bootstrap';

const MovieDetail = props => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const movieId = +props.match.params.id;

    moviesService.getMovieById(movieId).then(movie => {
      setMovie(movie);
    });
  }, [props.match.params.id]);

  const selectBadgeColor = genreId => {
    const genre = genres.find(genre => genre.id === genreId);
    return genre.color;
  };

  if (!movie) {
    return null;
  }

  const renderGeneres = (
    <h6 className="m-0">
      Generes:{' '}
      {movie.genres.map(genre => (
        <React.Fragment key={genre.id}>
          <Badge variant={selectBadgeColor(genre.id)}>{genre.name}</Badge>{' '}
        </React.Fragment>
      ))}
    </h6>
  );

  const renderTrailer = () => {
    if (movie.videos.results['0']) {
      return (
        <>
          <h6>Trailer:</h6>
          <Youtube videoId={movie.videos.results['0'].key} />
        </>
      );
    }
    return null;
  };

  return (
    <Container>
      <Row className="mt-3">
        <Col md={12} lg={5} className="mt-4">
          <Image
            src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
            rounded
            className="w-100"
          />
        </Col>
        <Col lg={7}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{movie.title}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Overview:</h5>
              <div>{movie.overview}</div>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex">{renderGeneres}</ListGroup.Item>
            <ListGroup.Item>{renderTrailer()}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetail;
