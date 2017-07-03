import React from 'react';
import { connect } from 'react-redux';
import { getProds } from '../actions/products';
import ProductDisp from './ProductDisp';

class Home extends React.Component {
  componentDidMount = () => {
    this.props.dispatch(getProds());
  }

  render () {

    return (
      <div>
        <ProductDisp history={this.props.history} products={this.props.products}/>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return { products: state.products }
}
export default connect(mapStateToProps)(Home);
