import React, { useEffect, useState } from 'react';
import moviesService from '../../Services/moviesService';
import { genres } from '../../Services/utilService';
import Youtube from 'react-youtube';
import { Container, Row, Col, Image, ListGroup, Badge } from 'react-bootstrap';

const MovieDetail = props => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const movieId = +props.match.params.id;

    moviesService.getMovieById(movieId).then(res => {
      setMovie(res);
    });
  }, [props.match.params.id]);

  if (!movie) {
    return null;
  }

  const selectBadgeColor = genreId => {
    const genre = genres.find(genre => genre.id === genreId);
    return genre.color;
  };

  const renderGeneres = (
    <h6>
      Generes:{' '}
      {movie.genres.map(genre => (
        <React.Fragment key={genre.id}>
          <Badge variant={selectBadgeColor(genre.id)}>{genre.name}</Badge>{' '}
        </React.Fragment>
      ))}
    </h6>
  );

  const renderTrailer = movie.videos.results['0'] && (
    <>
      <h6>Trailer:</h6>
      <Youtube videoId={movie.videos.results['0'].key} />
    </>
  );

  return (
    <Container>
      <Row className="mt-3">
        <Col xs={5} className="mt-4">
          <Image
            src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
            rounded
          />
        </Col>
        <Col xs={7}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{movie.title}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Overview:</h5>
              <div>{movie.overview}</div>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex">{renderGeneres}</ListGroup.Item>
            <ListGroup.Item>{renderTrailer}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetail;
