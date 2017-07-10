import React from 'react';
import { Grid, Row, Col, Thumbnail, Nav, NavItem } from 'react-bootstrap';
import { categories } from '../categories';

class ProductDisp extends React.Component {
  state={ filter: 'All' }

  displayFilter = () => {
    return categories.map( c => {
      return (
        <NavItem eventkey={c.key} onClick={() => this.setFilter(c.value)}>{c.text}</NavItem>
      )
    })
  }

  setFilter = (category) => {
    this.setState({ filter: category });
  }

  displayProds = (history, products) => {
    return products.map( prod => {

  //TODO: set const height for thumbnail, make image go set % of the height and all the width
  //TODO: no edge for thumbnal? just margin between each one

      return (
        <Col xs={9} md={4} key={prod.name}>
          <Thumbnail style={{ height: '300px'}}>
            <div style={{ textAlign: 'center'}} onClick={() => history.push(`/product/${prod.id}`)}>
              <img src={prod.imageurl} style={{ height: '150px', width: '100%'}}/>
            </div>
            <h3>{prod.name}</h3>
            <p>{prod.price}</p>
          </Thumbnail>
        </Col>
      )
    })
  }

  render() {
    let { history, products } = this.props;
    return(
      <div>
        <Grid>
          <Col xs={3} md={2}>
            <Nav>
              { this.displayFilter() }
            </Nav>
          </Col>
          <Col xs={9} md={10}>
            {this.displayProds(history, products)}
          </Col>
        </Grid>
      </div>
    )
  }

}





export default ProductDisp;
