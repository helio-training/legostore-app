import React, { Component } from 'react';

import ProductItem from '../../components/products/ProductItem';

export default class extends Component {

  constructor(props) {
    super(props);

    this.state = { products: [] };
  }

  /**
   * Why do we have to call the api function here?
   */
  componentDidMount() {
    fetch('http://nax2x9zhsilnhmydx-mock.stoplight-proxy.io/figures')
      .then(response => response.json())
      .then(products => this.setState({ products }))
      .catch(console.error);
  }

  render() {
    return (
      <div>
        <h1>Products</h1>

        {this.state.products.map(product => ProductItem(product))}

      </div>
    );
  }
}