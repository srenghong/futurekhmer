import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './Header.css';

const navbarStyle = {
  padding: '20px 0',
};

const Header = () => (
  <header>
    <div className="container">
      <Navbar
        expand="md"
        className="justify-content-between"
        style={navbarStyle}
      >
        <Navbar.Brand bsPrefix="logo" href="#home">
          FutureKhmer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link className="custom-nav-link" href="#home">
              Home
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
      </Navbar>
    </div>
  </header>
);

export default Header;
