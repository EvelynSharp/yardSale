import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import ProdImgDisp from './ProdImgDisp';
import ProdInfo from './ProdInfo';

class ProdPage extends React.Component {

  render() {

    return (
      <div className='pageCon'>
        <Grid >
          <Row style={{ border: '1px solid black'}}>
            <Col xs={6} md={6} style={{ border: '1px solid red', padding: '0'}}>
              <ProdImgDisp prodId={this.props.match.params.id}/>
            </Col>
            <Col xs={6} md={6} style={{ border: '1px solid red'}}>
              <ProdInfo prodId={this.props.match.params.id}/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} style={{ border: '1px solid red'}}>
              <div> test </div>
            </Col>
          </Row>
        </Grid>

      </div>
    )
  }
}

export default ProdPage;
