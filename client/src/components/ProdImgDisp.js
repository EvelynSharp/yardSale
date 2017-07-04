import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import { prodDetails } from '../actions/proddetails';

class ProdImgDisp extends React.Component {

  state={ imgNum: 0 }

  componentDidMount = () => {
    this.props.dispatch(prodDetails(this.props.prodId));
  }

  dispSideImg=() => {
    if(this.props.imageUrls) {
      return this.props.imageUrls.map( (url, index) => {
        return (
          <Row style={{ padding: '5px'}}>
            <img src={url} style={{ height: '60px'}} onClick={() => this.toggleImg(index)}/>
          </Row>
        )
      })
    }
  }

  toggleImg = (index) => {
    this.setState({ imgNum: index })
  }


  render() {
    let { imgNum } = this.state;
    let { imageUrls } = this.props;
    return (
      <div style={{textAlign: 'center' }}>
        <Grid style={{padding: '0', width: '180%'}}>
            <Col xs={1} md={1} style={{ border: '1px solid green', marginRight: '2em', marginLeft: '1em'}}>
              { this.dispSideImg()}
            </Col>
            <Col xs={5} md={5} style={{ border: '1px solid blue'}}>
              <img src={imageUrls ? imageUrls[imgNum] : null} style={{ height: '350px'}} />
            </Col>

        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { imageUrls: state.proddetails.imageUrls }
}

export default connect(mapStateToProps)(ProdImgDisp);
