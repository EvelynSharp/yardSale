import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, ControlLabel, Button, Grid, Col  } from 'react-bootstrap';
import { addProd } from '../actions/products';
import ImageDrop from './ImageDrop';
import { categories } from '../categories';

class ProdForm extends React.Component {
  // make componentWillMount - switch route if not admin
  defaultData = { id: '', name: '', price: '', category: '', imageUrls: ['', '', '', '', ''], imgIds: ['', '', '', '', '']}
  state = { ...this.defaultData }



  handleChange=(e)=>{
    let { id, value } = e.target;
    this.setState({ [id]: value });
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    const uuidv4 = require('uuid/v4');
    let id = uuidv4();
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
        <Col xs={6} md={4} key={num}>
          <ImageDrop imgNum={num} setImageUrlState={this.setImageUrlState}/>
        </Col>
      )
    })
  }

  cateOpt = () => {
    return categories.map( c => {
      return (
        <option key={c.key} value={c.value}> {c.value} </option>
      )
    })
  }

  render() {
    let { name, price, category } = this.state;
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
          <FormGroup>
            <ControlLabel>Product Category</ControlLabel>
            <FormControl
              id='category'
              componentClass='select'
              value={category}
              onChange={this.handleChange}
            >
              <option key='blank' value=''> </option>
              { this.cateOpt() }
            </FormControl>
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
