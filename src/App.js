import lightTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/common/Header';

import Routing from './Routing';
import Store from './storage';

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
