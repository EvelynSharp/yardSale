import React from 'react';
//import { Grid, Row, Col, Modal, Glyphicon} from 'react-bootstrap';
import { connect } from 'react-redux';
import { prodDetails } from '../actions/proddetails';

class ProdInfo extends React.Component {

  componentDidMount = () => {
    this.props.dispatch(prodDetails(this.props.prodId));
  }

  render(){
    let { name, price } = this.props.proddetails;
    return(
      <div style={{ paddingLeft: '5%'}}>
        <h2>{name}</h2>
        <h4>{price}</h4>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { proddetails: state.proddetails }
}

export default connect(mapStateToProps)(ProdInfo);
