import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Brand from './components/Brand';
import NoMatch from './components/NoMatch';

const App = () => (
  <div>
    <Brand />
    <NavBar />
    <Switch>
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default App;
