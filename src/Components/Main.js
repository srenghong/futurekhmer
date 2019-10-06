import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './../Pages/Home';
import Universities from './../Pages/Universities';
import Subjects from './../Pages/Subjects';
import Blogs from './../Pages/Blogs';

const Main = () => (
  <>
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/universities" component={Universities} />
        <Route path="/subjects" component={Subjects} />
        <Route path="/blogs" component={Blogs} />
      </Switch>
    </main>
  </>
);

export default Main;
