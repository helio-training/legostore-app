import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Products from './containers/products/Products';
import ProductDetails from './containers/products/ProductDetails';
import Cart from './containers/shopping-cart/Cart';
import { NotFound } from './containers/shared/Common';

// const BogusComponent = () => (<div><h1>Super Duper Bogus</h1></div>);

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Products} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/products/:id" component={ProductDetails} />
      {/*<Route path="/bogus" component={BogusComponent} />*/}
      <Redirect from="/products" to="/" />
      <Route component={NotFound} />
    </Switch>
  </Router>
)