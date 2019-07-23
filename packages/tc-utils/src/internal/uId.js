/**
 * Generate a unique ID with or without a id `prefix`.
 *
 * @param {string} [prefix=''] - Prefix a string to the ID.
 * @returns {string} Returns the unique ID.
 * @example
 *
 * uId('trend-');
 * // trend-1
 *
 * uId()
 * // 2
 */

const idManager = {};
const defaultPrefix = '_trend';

function uId(prefix=defaultPrefix) {
  if (!idManager[prefix]) {
    idManager[prefix] = 0;
  }

  const id =++idManager[prefix];

  return prefix === defaultPrefix ? `${id}` : `${prefix}${id}`;
}

export default uId;
