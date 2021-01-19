import { Link } from 'gatsby';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const StyledBrand = styled(Navbar.Brand)`
  font-family: Taviraj;
  color: inherit;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1ch;

  &:hover {
    color: inherit;
    text-decoration: none;
  }
`

export const Header = ({ siteTitle }) => (
  <StyledNavbar bg="transparent" expand="lg">
    <StyledBrand as={Link} to="/">{siteTitle}</StyledBrand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </StyledNavbar>
);
