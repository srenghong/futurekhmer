import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './../Pages/Home';
import About from './../Pages/About';
import Contact from './../Pages/Contact';
import Blogs from './../Pages/Blogs';

const Main = () => (
  <>
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/blogs" component={Blogs} />
      </Switch>
    </main>
  </>
);

export default Main;
