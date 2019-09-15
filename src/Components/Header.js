import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Header.css';

const navbarStyle = {
  padding: '25px 0',
};

const Header = () => (
  <header>
    <Navbar expand="md" className="justify-content-between" style={navbarStyle}>
      <Link to="/" className="custom-brand">
        FutureKhmer.
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Link to="/" className="custom-nav-link">
            Home
          </Link>
          <Link to="/about" className="custom-nav-link">
            About
          </Link>
          <Link to="/contact" className="custom-nav-link">
            Contact Us
          </Link>
          <Link to="/blogs" className="custom-nav-link">
            Blogs
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
);

export default Header;
