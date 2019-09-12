import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Categories.css';

import scienceImg from '../Images/science.png';
import economicImg from '../Images/economic.png';
import healthImg from '../Images/health.png';
import litteratureImg from '../Images/litterature.png';

const styleImg = {
  width: '100%',
  border: '5px solid white',
  'border-radius': '1rem',
  'margin-bottom': '20px',
};

const scienceStyle = {
  'background-color': '#F6E049',
  'border-radius': '1rem',
  padding: '30px 10px',
};

const economicStyle = {
  'background-color': '#7FD6C2',
  'border-radius': '1rem',
  padding: '30px 10px',
};

const healthStyle = {
  'background-color': '#AAC6FC',
  'border-radius': '1rem',
  padding: '30px 10px',
};

const litteratureStyle = {
  'background-color': '#EEBED3',
  'border-radius': '1rem',
  padding: '30px 10px',
};

const Categories = () => (
  <>
    <h2 className="heading">Categories</h2>
    <div className="container">
      <Row>
        <Col sm={12} md={6}>
          <div className="innerLeft">
            <Row style={scienceStyle}>
              <Col xs={6} md={12} lg={6}>
                <img src={scienceImg} style={styleImg} alt="science" />
              </Col>
              <Col xs={6} md={12} lg={6}>
                <h4>Science</h4>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo.
                </p>
                <p>
                  <Button variant="primary">Explore</Button>
                </p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div className="innerRight">
            <Row style={economicStyle}>
              <Col xs={6} md={12} lg={6}>
                <img src={economicImg} style={styleImg} alt="economic" />
              </Col>
              <Col xs={6} md={12} lg={6}>
                <h4>Economic</h4>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo.
                </p>
                <p>
                  <Button variant="primary">Explore</Button>
                </p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <div className="innerLeft">
            <Row style={litteratureStyle}>
              <Col xs={6} md={12} lg={6}>
                <img src={litteratureImg} style={styleImg} alt="litterature" />
              </Col>
              <Col xs={6} md={12} lg={6}>
                <h4>Litterature</h4>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo.
                </p>
                <p>
                  <Button variant="primary">Explore</Button>
                </p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div className="innerRight">
            <Row style={healthStyle}>
              <Col xs={6} md={12} lg={6}>
                <img src={healthImg} style={styleImg} alt="health" />
              </Col>
              <Col xs={6} md={12} lg={6}>
                <h4>Health</h4>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo.
                </p>
                <p>
                  <Button variant="primary">Explore</Button>
                </p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  </>
);

export default Categories;
