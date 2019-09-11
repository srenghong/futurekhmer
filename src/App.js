import React from 'react';
import './App.css';

import Layout from './Components/Layout';
import Banner from './Components/Banner';
import Categories from './Components/Category/Categories';

const App = () => (
  <Layout>
    <Banner />
    <Categories />
  </Layout>
);

export default App;
