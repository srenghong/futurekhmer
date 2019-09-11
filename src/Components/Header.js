import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './Header.css';

const Header = () => (
  <header>
    <Navbar expand="sm" className="justify-content-between">
      <Container>
        <Navbar.Brand href="#home">FutureKhmer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link className="custom-nav-link" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="custom-nav-link" href="#categories">
              Categories
            </Nav.Link>
            <Nav.Link className="custom-nav-link" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="custom-nav-link" href="#blogs">
              Blogs
            </Nav.Link>
            <Nav.Link className="custom-nav-link" href="#contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);

export default Header;
