import React from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';

const ProductDisp = ({ history, products }) => (
  <div>
    <Grid>
      <Col xs={3} md={2}>
        <div>text</div>
        <div>text</div>
        <div>text</div>
      </Col>
      <Col xs={9} md={10}>
        {displayProds(history, products)}
      </Col>
    </Grid>
  </div>
)

const displayProds = (history, products) => {
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

export default ProductDisp;
