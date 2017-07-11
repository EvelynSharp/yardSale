import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, ControlLabel, Button, Col, Row  } from 'react-bootstrap';
import { authenticateLogin } from '../actions/user';

class LoginForm extends React.Component {
  defaults = { email: '', password: '' }
  state = { ...this.defaults }

  handleChange = (e) => {
    let { target: { id, value }} = e;
    this.setState({ [id]: value },
    );
  }


  handleSubmit = (e) => {
    e.preventDefault();
    let { history, dispatch } = this.props;
    let { email, password } = this.state;
    dispatch(authenticateLogin(email, password, history));

  }


  render() {
    let { email, password } = this.state;
    return(
      <Form onSubmit={this.handleSubmit}>
        <Row >
          <Col xs={1} md={1}/>
          <Col xs={10} md={10}>
            <FormGroup>
              <ControlLabel>Email:</ControlLabel>
              <FormControl
                id='email'
                type='email'
                value={email}
                onChange={this.handleChange}
                required
              />
            </FormGroup>
          </Col>
          <Col xs={1} md={1}/>
        </Row>
        <Row >
          <Col xs={1} md={1}/>
          <Col xs={10} md={10}>
            <FormGroup>
              <ControlLabel>Password:</ControlLabel>
              <FormControl
                id='password'
                type='password'
                value={password}
                onChange={this.handleChange}
                required
              />
            </FormGroup>
          </Col>
          <Col xs={1} md={1}/>
        </Row>
        <Row style={{ textAlign: 'center'}}>
          <Button type='submit'>Login</Button>
        </Row>
      </Form>

    )
  }


}

export default connect()(LoginForm);
