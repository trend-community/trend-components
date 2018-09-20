'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const pathResolver = require('./scripts/pathResolver')();
const cssBundler = require('./scripts/webpack/cssBundler')();

const output = {
  fsDirAbsolutePath: pathResolver.getAbsPath('/docs'),
  httpDirAbsolutePath: '',
  filenamePattern: '[name].[hash]'
};

const cssConfig = cssBundler.createCustomCss({
  bundleName: 'docs',
  output,
  chunks: [pathResolver.getAbsPath('/src/index.js')]
});

const docsConfig = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].min.css',
      chunkFilename: '[id].[hash].min.css'
    }),
    new HtmlWebpackPlugin({
      template: pathResolver.getAbsPath('./src/public/index.html')
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i
      }),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      pathResolver.getAbsPath('./src')
    ],
    alias: {
      packages: pathResolver.getAbsPath('./packages')
    },
    extensions: ['*', '.js', '.jsx', '.scss']
  }
};

module.exports = {
  ...cssConfig,
  ...docsConfig,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.md$/,
        use: ['raw-loader']
      },
      ...cssConfig.module.rules
    ]
  }
};
