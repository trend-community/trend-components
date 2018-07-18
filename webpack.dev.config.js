'use strict';

const webpack = require('webpack');

const cssBundler =  require('./scripts/webpack/cssBundler')();
const pathResolver = require('./scripts/pathResolver')();

const DEMO_BASE_DIR = pathResolver.getAbsPath('/src/public');

const devServerConfig = {
  devServer: {
    contentBase: DEMO_BASE_DIR,
    hot: true
  }
};

const config = {
  ...cssBundler.createCustomCss({
    bundleName: 'css-bundle',
    chunks: [pathResolver.getAbsPath('/src/index.js')],
    output: {
      fsDirAbsolutePath: pathResolver.getAbsPath('/src/public'),
      httpDirAbsolutePath: '/',
      filenamePattern: 'bundle'
    },
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.md$/,
        use: ['raw-loader']
      }
    ],
    plugins: [new webpack.HotModuleReplacementPlugin()]
  }),
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
  ...devServerConfig,
  ...config,
};
