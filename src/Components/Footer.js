import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';

import facebookIcon from '../Images/icons8-facebook-100.png';
import messengerIcon from '../Images/icons8-facebook-messenger-100.png';
import twitterIcon from '../Images/icons8-twitter-circled-100.png';
import githubIcon from '../Images/icons8-github-100.png';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="inner">
        <Row>
          <Col sm={12} md={6}>
            <p>FutureKhmer</p>
            <p>Handcrafted by me &copy; 2019</p>
            <p>
              Made with{' '}
              <a href="https://icons8.com" alt="Icons8 Website">
                Icons8
              </a>{' '}
              and design from{' '}
              <a
                href="https://dribbble.com/shots/6998421-Education-Web-Platform-Design"
                alt="dribbble link"
              >
                Dribbble
              </a>
            </p>
          </Col>
          <Col sm={12} md={6} className="socialIcons">
            <img className="icon" src={facebookIcon} alt="Facebook" />
            <img className="icon" src={messengerIcon} alt="Messenger" />
            <img className="icon" src={twitterIcon} alt="Twitter" />
            <img className="icon" src={githubIcon} alt="Github" />
          </Col>
        </Row>
      </div>
    </div>
  </footer>
);

export default Footer;
