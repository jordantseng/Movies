import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './MovieItem.css';

const MovieItem = ({ id, title, release_date, vote_average, img }) => {
  return (
    <Col>
      <Link to={`/movies/${id}`}>
        <Card style={{ width: '15rem', margin: '1rem 0 1rem 0' }}>
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500${img}`}
          />
          <Card.Body>
            <Card.Title className="trim">{title}</Card.Title>
            <Card.Text>Release Date: {release_date}</Card.Text>
            <p>Votes: {vote_average} / 10</p>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default MovieItem;
