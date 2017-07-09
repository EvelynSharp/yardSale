import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Brand from './components/Brand';
import NoMatch from './components/NoMatch';
import Home from './components/Home';
import ProdForm from './components/ProdForm';
import ProdPage from './components/ProdPage';
import Shop from './components/Shop';
import ContactForm from './components/ContactForm';
import ContactSent from './components/ContactSent';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import About from './components/About';

const App = () => (
  <div>
    <Brand />
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/shopall" component={Shop} />
      <Route exact path="/product/:id" component={ProdPage} />
      <Route exact path="/newproduct" component={ProdForm} />
      <Route exact path="/contact" component={ContactForm} />
      <Route exact path="/msgsent" component={ContactSent} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/about" component={About} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default App;
