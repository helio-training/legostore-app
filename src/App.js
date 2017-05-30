import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getTheme from 'material-ui/styles/getMuiTheme';

import { Provider } from 'react-redux';

import Routing from './Routing';
import Store from './storage';

import CartBadge from './components/cart/CartBadge';

import Header from './components/common/Header';

export default () => (
  <Provider store={Store}>
    <MuiThemeProvider muiTheme={getTheme(lightTheme)}>


      <section role="main">

        <Header />
        <main>
          <aside>
            <CartBadge />
            <nav>
              <a href="/">Home</a>
              <a href="/figures">Figures</a>
            </nav>
          </aside>
          <article>
            <Routing />
          </article>
        </main>
        {/*<footer>*/}
        {/*<nav>*/}
        {/*<ul>*/}
        {/*<li><a href="#">Footer Url</a></li>*/}
        {/*<li><a href="#">Footer Url</a></li>*/}
        {/*<li><a href="#">Footer Url</a></li>*/}
        {/*</ul>*/}
        {/*</nav>*/}
        {/*</footer>*/}
      </section>
    </MuiThemeProvider>
  </Provider>
);
