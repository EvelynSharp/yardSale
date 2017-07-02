import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProds } from '../actions/products';

class Home extends Component {
  componentDidMount = () => {
    this.props.dispatch(getProds());
  }

  render () {

    return (
      <div>

      </div>

    )
  }
}

export default connect()(Home);
