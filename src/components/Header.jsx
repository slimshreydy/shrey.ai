import { Link } from 'gatsby';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
  margin-top: 2em;
  margin-bottom: 2em;
`;

export const Header = ({ siteTitle }) => (
  <StyledNavbar bg="light" expand="lg">
    <Navbar.Brand as={Link} to="/">{siteTitle}</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </StyledNavbar>
);
