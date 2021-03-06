import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, ControlLabel, Button, Grid, Col, Row  } from 'react-bootstrap';
import { addMsg } from '../actions/messages';

class ContactForm extends React.Component {
  defaultData = { ctIssue: '', ctName: '', ctEmail: '', ctPhone: '', ctMsg: '' }
  state={ ...this.defaultData}

  handleChange=(e)=>{
    let { id, value } = e.target;
    this.setState({ [id]: value });
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.dispatch(addMsg( {...this.state} ));
    this.props.history.push('/msgsent')
  }

  render () {
    let { ctIssue, ctName, ctEmail, ctPhone, ctMsg } = this.state;
    return (
      <div>
        <Grid>
          <Col xs={1} md={2}/>
          <Col xs={10} md={8}>
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <div className="textCenter">Contact Us</div>
              </Row>
              <Row>
                <Col xs={6} md={6}>
                  <FormGroup>
                    <ControlLabel>Issue Type</ControlLabel>
                    <FormControl
                      id='ctIssue'
                      type='text'
                      value={ctIssue}
                      onChange={this.handleChange}
                      placeholder='Select Issue'
                      required
                    />
                  </FormGroup>
                </Col>
                <Col xs={6} md={6}>
                  <FormGroup>
                    <ControlLabel>Name:</ControlLabel>
                    <FormControl
                      id='ctName'
                      type='text'
                      value={ctName}
                      onChange={this.handleChange}
                      placeholder='Enter Your Name'
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={6}>
                  <FormGroup>
                    <ControlLabel>Email:</ControlLabel>
                    <FormControl
                      id='ctEmail'
                      type='email'
                      value={ctEmail}
                      onChange={this.handleChange}
                      placeholder='Enter Your Email Address'
                      required
                    />
                  </FormGroup>
                </Col>
                <Col xs={6} md={6}>
                  <FormGroup>
                    <ControlLabel>Phone Number: (Optional)</ControlLabel>
                    <FormControl
                      id='ctPhone'
                      type='tel'
                      value={ctPhone}
                      onChange={this.handleChange}
                      placeholder='Enter Your Phone Number'
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                  <FormGroup controlId="ctMsg">
                    <ControlLabel>Message:</ControlLabel>
                    <FormControl
                      value={ctMsg}
                      componentClass="textarea"
                      placeholder="Enter Your Message"
                      onChange={this.handleChange}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row >
                <Col xs={12} md={12} style={{ textAlign: 'right'}}>
                  <Button type="submit">
                    SEND
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col xs={1} md={2}/>
        </Grid>
      </div>
    )
  }
}


export default connect()(ContactForm);
