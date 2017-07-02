import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Brand from './components/Brand';

const App = () => (
  <div>
    <Brand />
    <NavBar />
    <Switch>
      <div> hello </div>
    </Switch>
  </div>
);

export default App;
