/**
 * Create a webpack config object that compiles SASS files to css.
 */

'use strict';

const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const env = require('../env')();
const pathResolver = require('../pathResolver')();
const getChunks = require('./getChunks');
const getAbsolutePaths = require('./getAbsolutePaths');
const pluginCopyrightBanner = require('./pluginCopyrightBanner');
const pluginCssClean = require('./pluginCssClean');

const getAbsolutePath = (...args) => pathResolver.getAbsPath(...args);

function cssBundler() {
  function createCssLoader() {
    return [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: { sourceMap: true }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          plugins: () => [autoprefixer({ grid: false })]
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          includePaths: [
            getAbsolutePath('./packages/trend-components/node_modules')
          ]
        }
      }
    ];
  }

  function createCustomCss({
    bundleName,
    chunks,
    chunkGlobConfig: {
      inputDirectory = null,
      filePathPattern = '**/*.scss',
    } = {},
    output: {
      // Required for building the npm dist and writing output files to disk.
      fsDirAbsolutePath = undefined,
      // Required for running the demo server
      httpDirAbsolutePath = undefined,
      filenamePattern = env.isProd() ? '[name].min.css' : '[name].css',
    },
    rules = [],
    plugins = [],
  }) {
    chunks = chunks || getChunks({ inputDirectory, filePathPattern });

    const fsCleanupPlugins = [];

    if (fsDirAbsolutePath) {
      fsCleanupPlugins.push(pluginCssClean({
        cleanDirRelativePath: fsDirAbsolutePath,
      }));
    }

    return {
      mode: env.isProd() ? 'production' : 'development',
      name: bundleName,
      entry: chunks,
      output: {
        path: fsDirAbsolutePath,
        publicPath: httpDirAbsolutePath,
        filename: `${filenamePattern}.js`
      },
      devtool: 'source-map',
      module: {
        rules: [
          ...rules,
          {
            test: /\.(css|scss)$/,
            use: createCssLoader(),
          }
        ],
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: env.isProd() ? '[name].min.css' : '[name].css',
          chunkFilename: env.isProd() ? '[id].min.css' : '[id].css'
        }),
        ...fsCleanupPlugins,
        ...plugins,
      ],
    };
  }

  function createFullBundle({
    output: {
      fsDirAbsolutePath,
      httpDirAbsolutePath,
    },
    plugins = [],
    rules = []
  }) {
    return createCustomCss({
      bundleName: 'main-css-combined',
      chunks: {
        'trend-component':
          getAbsolutePath('/packages/trend-components/index.scss'),
      },
      output: {
        fsDirAbsolutePath,
        httpDirAbsolutePath,
      },
      plugins: [
        pluginCopyrightBanner(),
        ...plugins
      ],
      rules
    });
  }

  function createIndividualBundles({
    output: {
      fsDirAbsolutePath,
      httpDirAbsolutePath
    },
    plugins = []
  }) {
    return createCustomCss({
      bundleName: 'individual-css-bundles',
      chunks: {
        'tc.helpers': getAbsolutePath('/packages/tc-helpers/index.scss'),
        'tc.normalize': getAbsolutePath('/packages/tc-normalize/index.scss'),
        'tc.theme': getAbsolutePath('/packages/tc-theme/index.scss'),
        'tc.type': getAbsolutePath('/packages/tc-type/index.scss')
      },
      output: { fsDirAbsolutePath, httpDirAbsolutePath },
      plugins: [
        pluginCopyrightBanner(),
        ...plugins
      ]
    });
  }

  function init() {
    const bundler = Object.create(api);

    return bundler;
  }

  const api = {
    createCustomCss,
    createFullBundle,
    createIndividualBundles
  };

  return init();
}

module.exports = cssBundler;
