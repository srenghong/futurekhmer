import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';

import Header from './Header';
import Footer from './Footer';

const Layout = (props) => (
  <>
    <Header />
    <main>
      <div className="container">{props.children}</div>
    </main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
