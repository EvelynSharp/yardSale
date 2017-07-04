import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Brand from './components/Brand';
import NoMatch from './components/NoMatch';
import Home from './components/Home';
import ProdForm from './components/ProdForm';

const App = () => (
  <div>
    <Brand />
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/newproduct" component={ProdForm} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default App;
