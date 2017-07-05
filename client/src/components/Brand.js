import React from 'react';
import { PageHeader, Grid, Col, Glyphicon } from 'react-bootstrap';
import {  withRouter } from 'react-router-dom';

const Brand = ({ location }) => (
  <div>
    <Grid>
      <Col xs={2} md={2}/>
      <Col xs={8} md={8}>
        <PageHeader style={{ textAlign: 'center', margin: '0'}}>Yard Sale SG</PageHeader>
      </Col>
      { location.pathname === '/shopall' &&
        <Col xs={2} md={2} style={{ textAlign: 'right'}}>
          <Glyphicon glyph="shopping-cart" bsSize="lg" style={{ fontSize: '20px', margin: '30% 10% 0 0'}}/>
          <span>(0)</span>
        </Col>
      }

    </Grid>
  </div>
)

export default withRouter(Brand);
