/**
 * Tests if value matches the current node environment.
 *
 * @param {string} value - The value to test.
 * @returns {boolean} - Returns `true` if value matches current environment
 * else `false`.
 */

import not from './not';

const envs = {
  production: 'production',
  prod: 'production',
  development: 'development',
  dev: 'development',
  test: 'test',
  testing: 'test'
}

function isEnv(value) {
  return process.env.NODE_ENV === envs[value];
}

const isNotEnv = not(isEnv);

export { isNotEnv };
export default isEnv;
