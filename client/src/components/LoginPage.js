import React from 'react';
import LoginForm from './LoginForm';
import { Grid, Col, Row  } from 'react-bootstrap';

const LoginPage = ({ ...props }) => (
  <div>

    <LoginForm { ...props }/>
  </div>
)

export default LoginPage
