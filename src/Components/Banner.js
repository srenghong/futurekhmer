import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import educationImg from '../Images/education.png';

import './Banner.css';

const Banner = () => (
  <div className="banner">
    <Row>
      <Col md={5} lg={4}>
        <h1>Get Free Education</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component.</p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Col>
      <Col md={7} lg={8}>
        <img src={educationImg} alt="Education" className="educationImg" />
      </Col>
    </Row>
  </div>
);

export default Banner;
