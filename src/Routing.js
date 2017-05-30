import React from 'react';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Figures from './containers/products/Figures';
import Figure from './containers/products/Figure';
import Cart from './containers/shopping-cart/Cart';
import { NotFound } from './containers/shared/Common';

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Figures} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/figures/:id" component={Figure} />
      <Redirect from="/figures" to="/" />
      <Route component={NotFound} />
    </Switch>
  </Router>
)