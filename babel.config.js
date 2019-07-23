'use strict';

const env = require('./scripts/env')();

module.exports = {
  babelrcRoots: [
    '.',
    'packages/*',
  ],
  presets: [
    ['@babel/preset-env', {
      loose: true,
      modules: env.isBabelBuilding() ? false : 'cjs'
    }],
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-throw-expressions',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import',
    'dev-expression',
    'transform-react-remove-prop-types',
    ['transform-inline-environment-variables', {
        include: ['COMPAT']
    }],
    !env.isProd() && [
      'module-resolver',
      {
        alias: {
          '^@trend([\/][a-zA-Z]+)([\/].*)?': '@trend\\1/src\\2'
        }
      }
    ]
  ].filter(Boolean)
};
