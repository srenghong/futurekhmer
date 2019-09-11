import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';

import Header from './Header';
import Footer from './Footer';

const containerStyle = {
  'margin-top': '20px',
};

const Layout = (props) => (
  <>
    <Header />
    <Container style={containerStyle}>{props.children}</Container>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
