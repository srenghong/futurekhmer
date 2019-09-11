import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';

const Footer = () => (
  <footer>
    <Container>
      <div className="inner">
        <Row>
          <Col lg={8}>
            <p>Handcrafted by me &copy; 2019</p>
            <p>Made with icons8.com and hosted on Netlify.</p>
          </Col>
          <Col lg={4}>
            <p>Contact social link</p>
          </Col>
        </Row>
      </div>
    </Container>
  </footer>
);

export default Footer;
