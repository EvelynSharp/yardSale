import React from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';

const ProductDisp = ({ history, products }) => (
  <div>
    <Grid>
      {displayProds(history, products)}
    </Grid>
  </div>
)

const displayProds = (history, products) => {
  return products.map( prod => {
    return (
      <Col xs={6} md={4}>
        <Thumbnail src={prod.imageUrl} alt="242x200">
          <h3>{prod.name}</h3>
          <p>{prod.price}</p>
          <p>{prod.imageUrl}</p>
        </Thumbnail>
      </Col>
    )
  })
}

export default ProductDisp;
