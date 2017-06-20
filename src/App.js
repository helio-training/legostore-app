import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getTheme from 'material-ui/styles/getMuiTheme';
import { Provider } from 'react-redux';

import Routing from './Routing';
import Store from './storage';
import Header from './components/common/Header';

export default () => (
  <Provider store={Store}>
    <MuiThemeProvider muiTheme={getTheme(lightTheme)}>
      <section role="main">
        <Header />
        <main>
          <article>
            <Routing />
          </article>
        </main>
      </section>
    </MuiThemeProvider>
  </Provider>
);
