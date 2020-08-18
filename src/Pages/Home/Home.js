import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={e => onSubmit(e)}>
        <Row>
          <Col xs={10}>
            <Form.Control
              as="input"
              onChange={e => setSearchTerm(e.target.value)}
              value={searchTerm}
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
