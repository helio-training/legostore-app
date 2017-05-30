import React, { Component } from 'react';

export default class extends Component {

  constructor(props) {
    super(props);

    this.state = { products: [] };
  }

  componentDidMount() {
    fetch('http://nax2x9zhsilnhmydx-mock.stoplight-proxy.io/figures')
      .then(response => response.json())
      .then(products => this.setState({ products }))
      .catch(console.error);
  }

  render() {
    return (
      <div>
        <h1>Figures</h1>

      </div>
    );
  }
}