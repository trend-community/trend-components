import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './app';
import "styles/main.scss";

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);

module.hot.accept();
