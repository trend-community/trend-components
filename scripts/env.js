/**
 * @file API to read and write environmet variables.
 */

'use strict';

const DEVELOPMENT = 'development';
const PRODUCTION = 'production';

function env() {
  function isDev() {
    return process.env.NODE_ENV === DEVELOPMENT;
  }

  function isProd() {
    return process.env.NODE_ENV === PRODUCTION;
  }

  function isBabelBuilding() {
    const BABEL_ENV = process.env.BABEL_ENV;

    return BABEL_ENV !== undefined && BABEL_ENV !== "cjs";
  }

  const api = {
    isDev,
    isProd,
    isBabelBuilding
  };

  function init() {
    return Object.create(api);
  }

  return init();
}

module.exports = env;
