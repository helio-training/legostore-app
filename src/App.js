import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getTheme from 'material-ui/styles/getMuiTheme';
import {
  Drawer,
  MenuItem,
  AppBar,
} from 'material-ui';

import Routing from './Routing';

import './App.css';

export default () => (
  <MuiThemeProvider muiTheme={getTheme(lightTheme)}>
    <section role="main">
      <header>
        {/*<AppBar />*/}
      </header>
      <main>
        {/*<aside>*/}
          {/*Side Nav*/}
        {/*</aside>*/}
        {/*<Drawer open={true}>*/}
          {/*<MenuItem>Mini Figures</MenuItem>*/}
          {/*<MenuItem>About</MenuItem>*/}
          {/*<MenuItem>Support</MenuItem>*/}
        {/*</Drawer>*/}
        <article>
          <Routing />
        </article>
      </main>
      <footer>
        {/*<nav>*/}
          {/*<ul>*/}
            {/*<li><a href="#">Footer Url</a></li>*/}
            {/*<li><a href="#">Footer Url</a></li>*/}
            {/*<li><a href="#">Footer Url</a></li>*/}
          {/*</ul>*/}
        {/*</nav>*/}
      </footer>
    </section>
  </MuiThemeProvider>
);
