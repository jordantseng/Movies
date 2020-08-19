import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../../Actions';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    dispatch(searchMovies(searchTerm));
  };

  return (
    <Container style={{ marginTop: '25%' }}>
      <Form onSubmit={e => onSubmit(e)}>
        <Row>
          <Col xs={10}>
            <Form.Control
              as="input"
              onChange={e => setSearchTerm(e.target.value)}
              value={searchTerm}
              placeholder="search a movie..."
            />
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Home;
