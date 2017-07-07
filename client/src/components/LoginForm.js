import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, ControlLabel, Button, Grid, Col, Row  } from 'react-bootstrap';

class LoginForm extends React.Component {
  defaults = { email: '', password: '' }
  state = { ...this.defaults }

  handleChange = (e) => {
    let { target: { id, value }} = e;
    // this.setState({ [id]: value }, () => {
    //   if (id === 'email' || id === 'password') {
    //     this.props.dispatch({ type: 'RESET_USER_ERROR'});
    //   }
    // });
  }


  handleSubmit = (e) => {
    e.preventDefault();
    // let { title, history, dispatch } = this.props;
    // let { email, password, avatarUrl, passwordValidation } = this.state;
    // if ( title === 'Register') {
    //   if (avatarUrl === '' || password !== passwordValidation) {
    //     if (avatarUrl === '')
    //       this.setState({ avatarCheck: false });
    //     if (password !== passwordValidation)
    //       this.setState({ passwordCheck: false });
    //   } else {
    //     dispatch(authenticateLogin(email, password, history));
    //   }
    // } else {
    //     dispatch(authenticateLogin(email, password, history));
    // }
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

      </Form>

    )
  }


}

export default connect()(LoginForm);
