import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles/index.css';

import tapPlugin from 'react-tap-event-plugin';
tapPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
