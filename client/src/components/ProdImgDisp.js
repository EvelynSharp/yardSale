import React from 'react';
import { Grid, Row, Col, Modal, Glyphicon} from 'react-bootstrap';
import { connect } from 'react-redux';
import { prodDetails } from '../actions/proddetails';

class ProdImgDisp extends React.Component {

  state={ imgNum: 0, showModal: false }

  componentDidMount = () => {
    this.props.dispatch(prodDetails(this.props.prodId));
  }

  dispSideImg=() => {
    if(this.props.imageUrls) {
      return this.props.imageUrls.map( (url, index) => {
        return (
          <Row style={{ padding: '5px'}} key={index}>
            <img src={url} style={{ height: '60px'}} onClick={() => this.toggleImg(index)}/>
          </Row>
        )
      })
    }
  }

  toggleLarImg=(direction) => {
    //TODO: current index increment get remainder of 5 to use as the next index
    let imgNum;
    const maxImg = 5;
    if(direction === '-') {
      imgNum = (this.state.imgNum - 1) >= 0 ? (this.state.imgNum - 1)%maxImg : maxImg-1;
    } else {
      imgNum = Math.abs((this.state.imgNum + 1)%maxImg);
    }
    this.setState({ imgNum })
  }

  toggleImg = (index) => {
    this.setState({ imgNum: index })
  }

  closeLarImg = () => {
    this.setState({ showModal: false });
  }

  openLarImg = () => {
    this.setState({ showModal: true });
  }

  render() {
    let { imgNum, showModal } = this.state;
    let { imageUrls } = this.props;
    return (
      <div style={{textAlign: 'center' }}>
        <Grid style={{padding: '0', width: '180%'}}>
            <Col xs={1} md={1} style={{ border: '1px solid green', marginRight: '2em', marginLeft: '1em'}}>
              { this.dispSideImg()}
            </Col>
            <Col xs={5} md={5} style={{ border: '1px solid blue'}}>
              <img src={imageUrls ? imageUrls[imgNum] : null} style={{ height: '350px'}} onClick={this.openLarImg}/>
              <Modal show={showModal} onHide={this.closeLarImg}>
                <Glyphicon glyph="menu-left" onClick={()=>{this.toggleLarImg('-')}} style={{ fontSize: '30px'}}/>
                <img src={imageUrls ? imageUrls[imgNum] : null} style={{ height: '500px'}}/>
                <Glyphicon glyph="menu-right" onClick={()=>{this.toggleLarImg('+')}} style={{ fontSize: '30px'}}/>
              </Modal>
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
