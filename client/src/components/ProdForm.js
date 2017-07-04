import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, ControlLabel, Button, Grid, Col  } from 'react-bootstrap';
import { addProd } from '../actions/products';
import ImageDrop from './ImageDrop';


class ProdForm extends React.Component {
  // make componentWillMount - switch route if not admin
  defaultData = { id: '', name: '', price: '', imageUrls: ['', '', '', '', ''], imgIds: ['', '', '', '', '']}
  state = { ...this.defaultData }



  handleChange=(e)=>{
    let { id, value } = e.target;
    this.setState({ [id]: value });
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    const uuidv1 = require('uuid/v1');
    let id = uuidv1();
    this.setState({id},
      () => {
        this.props.dispatch(addProd(this.state))
      }
    )
  }

  setImageUrlState=(url, imgNum) => {
    const uuidv1 = require('uuid/v1');
    let newImgArr = [...this.state.imageUrls];
    let newImgIds = [ ...this.state.imgIds]
    newImgArr[imgNum] = url;
    newImgIds[imgNum] = uuidv1();
    this.setState({ imageUrls: newImgArr})
    this.setState({ imgIds: newImgIds})
  }

  displayImgDrop=()=>{
    const arrToMap = [0,1,2,3,4];
    return arrToMap.map( num => {
      return (
        <Col xs={6} md={4}>
          <ImageDrop imgNum={num} setImageUrlState={this.setImageUrlState}/>
        </Col>
      )
    })
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
          <Grid>
            { this.displayImgDrop()}
          </Grid>
          <Button type="submit">
            POST
          </Button>
        </Form>
      </div>
    )
  }
}

export default connect()(ProdForm);
