/**
 * @file API to read and write environmet variables.
 */

'use strict';

const DEVELOPMENT = 'development';
const PRODUCTION = 'production';

function env() {
  function isDev() {
    return process.env.TC_ENV === DEVELOPMENT;
  }

  function isProd() {
    return process.env.TC_ENV === PRODUCTION;
  }

  const api = {
    isDev,
    isProd
  };

  function init() {
    return Object.create(api);
  }

  return init();
}

module.exports = env;
