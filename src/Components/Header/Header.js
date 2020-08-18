import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Navbar.Brand as={Link} to="/">
        Movies
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} exact to="/">
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to="/popular">
          Popular
        </Nav.Link>
        <Nav.Link as={NavLink} to="/up-coming">
          Up Coming
        </Nav.Link>
        <Nav.Link as={NavLink} to="/now-playing">
          Now Playing
        </Nav.Link>
        <Nav.Link as={NavLink} to="/top-rated">
          Top Rated
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
