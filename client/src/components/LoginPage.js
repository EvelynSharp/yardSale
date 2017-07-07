import React from 'react';
import LoginForm from './LoginForm';
import { Grid, Col, Row  } from 'react-bootstrap';

const LoginPage = ({ ...props }) => (
  <div>
    <Grid >
      <Row style={{ margin: '5% 0'}}>
      <Col xs={2} md={4} />
      <Col xs={8} md={4} >
        <LoginForm { ...props }/>
      </Col>
      <Col xs={2} md={4} />
      </Row>
    </Grid>
  </div>
)

export default LoginPage
