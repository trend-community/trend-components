import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import App from './app';

import "packages/trend-components/index.scss";

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);

module.hot.accept();
