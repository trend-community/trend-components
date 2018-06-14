'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const cssBundler =  require('./scripts/webpack/cssBundler')();
const pathResolver = require('./scripts/pathResolver')();
const getChunks = require('./scripts/webpack/getChunks');

const DEMO_BASE_DIR = pathResolver.getAbsPath('/demos');
const cssChunks = getChunks({
  filePathPattern: '**/[!_]*.scss',
  inputDirectory: '/demos'
});
const pugChunks = getChunks({
  filePathPattern: '**/[!_]*.pug',
  inputDirectory: '/demos/templates'
});

const pugPlugins = Object
  .keys(pugChunks)
  .map(name => new HtmlWebpackPlugin({
    template: pugChunks[name],
    filename: `${name}.html`,
    chunks: [...[name], 'base']
  }));

const devServerConfig = {
 devServer: {
    contentBase: DEMO_BASE_DIR
  }
};

const cssConfig = cssBundler.createCustomCss({
  bundleName: 'demo-css',
  chunks: cssChunks,
  output: {
    fsDirAbsolutePath: pathResolver.getAbsPath('/build'),
    httpDirAbsolutePath: '/',
    filenamePattern: '[name].css.js'
  },
  rules: [
    {
      test: /\.pug$/,
      exclude: /node_modules/,
      loader: 'pug-loader'
    }
  ],
  plugins: [
    ...pugPlugins,
    new webpack.HotModuleReplacementPlugin()
  ]
});

module.exports = {
  ...devServerConfig,
  ...cssConfig
};
