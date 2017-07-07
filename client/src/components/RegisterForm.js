import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, ControlLabel, Button, Grid, Col, Row  } from 'react-bootstrap';
import { authenticateNew } from '../actions/user';

class RegisterForm extends React.Component {
  defaults = { email: '', password: '', pwCheck: '' }
  state = { ...this.defaults }

  handleChange = (e) => {
    let { target: { id, value }} = e;
  //   if (id === 'passwordValidation') {
  //     this.setState({ passwordCheck: true });
  //   }
  //   if (id === 'password') {
  //     this.setState({ pwCharCheck: true });
  //   }
    this.setState({ [id]: value });
  // }
  }


  handleSubmit = (e) => {
    e.preventDefault();
    let { dispatch } = this.props;
    let { email, password } = this.state;
    dispatch( authenticateNew(email, password));
    // let { title, history, dispatch } = this.props;
    // let { nickName, birthDate, phoneNumber, address, gender, email, password, avatarUrl, userBio, passwordValidation} = this.state;
    // if (avatarUrl === '' || password.length < 8 || password !== passwordValidation ) {
    //   if (avatarUrl === '')
    //     this.setState({ avatarCheck: false });
    //   if (password.length < 8)
    //     this.setState({ pwCharCheck: false });
    //   if (password !== passwordValidation)
    //     this.setState({ passwordCheck: false });
    // } else {
    //   dispatch(authenticateNew(nickName, birthDate, phoneNumber, address, gender, email, password, avatarUrl, userBio, title, history));
    // }
  }


  render() {
    let { email, password, pwCheck } = this.state;
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
        <Row >
          <Col xs={1} md={1}/>
          <Col xs={10} md={10}>
            <FormGroup>
              <ControlLabel>Re-enter Password:</ControlLabel>
              <FormControl
                id='pwCheck'
                type='password'
                value={pwCheck}
                onChange={this.handleChange}
                required
              />
            </FormGroup>
          </Col>
          <Col xs={1} md={1}/>
        </Row>
        <Row style={{ textAlign: 'center'}}>
          <Button type='submit'>Register</Button>
        </Row>
      </Form>

    )
  }


}

export default connect()(RegisterForm);
