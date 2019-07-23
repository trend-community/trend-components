/**
 * Checks if `key` is a direct property of object.
 *
 * @param {object} object - The object to check.
 * @param {string} key = The key to check.
 * @returns {boolean} - Returns `true` when `key` exists, `false` otherwise.
 */

function has(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}

export default has;
