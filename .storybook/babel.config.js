'use strict';

const config = require('../babel.config');

module.exports = {
  ...config,
  presets: [
    ['@babel/preset-env', {
      loose: true,
      modules: false
    }],
    '@babel/preset-react'
  ],
};
