import React from 'react';
import RegisterForm from './RegisterForm';
import { Grid, Col, Row  } from 'react-bootstrap';

const RegisterPage = ({ ...props }) => (
  <div>
    <Grid >
      <Row style={{ margin: '5% 0'}}>
      <Col xs={2} md={4} />
      <Col xs={8} md={4} >
        <RegisterForm { ...props }/>
      </Col>
      <Col xs={2} md={4} />
      </Row>
    </Grid>
  </div>
)

export default RegisterPage;
