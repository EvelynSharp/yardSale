import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, ControlLabel, Button  } from 'react-bootstrap';
import { addProd } from '../actions/products';

class ProdForm extends React.Component {
  // make componentWillMount - switch route if not admin
  defaultData = { id: '', name: '', price: ''}
  state = { ...this.defaultData }

  handleChange=(e)=>{
    let { id, value } = e.target;
    this.setState({ [id]: value });
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    const uuidv1 = require('uuid/v1');
    this.setState({ id: uuidv1()},
      this.props.dispatch(addProd(this.state))
    )
  }

  render() {
    let { name, price } = this.state;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <ControlLabel>Product Name</ControlLabel>
            <FormControl
              id='name'
              type='text'
              value={name}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Product Price</ControlLabel>
            <FormControl
              id='price'
              type='number'
              value={price}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button type="submit">
            POST
          </Button>
        </Form>
      </div>
    )
  }
}

export default connect()(ProdForm);
