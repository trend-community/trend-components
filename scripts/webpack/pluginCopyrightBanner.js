/**
 * Add a copyright to top of output files using Webpack Banner plugin.
 *
 * @function pluginCopyRightBanner
 * @param {Object} [details] - Define project, author, and license
 * @param {string} details.project=TREND Components
 * @param {string} details.author=TREND Community
 * @param {string} details.license=MIT
 * @requires webpack.BannerPlugin
 * @returns {Object} A new webpack.BannerPlugin.
 */

'use strict';

const { BannerPlugin } = require('webpack');
const pkg = require('../../package');

const details = {};

function pluginCopyRightBanner({
  project = 'TREND Components',
  author = 'TREND Community',
  license = pkg.license } = details) {
  const banner = [
    '/*!',
    `${project}`,
    `Copyright (c) ${new Date().getFullYear()} ${author}`,
    `License: ${license}`,
    '*/'
  ].join(' ');

  return new BannerPlugin({
    banner,
    raw: true,
    entryOnly: true
  });
}

module.exports = pluginCopyRightBanner;
