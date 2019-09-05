/**
 * Checks if `value` is a `String` primitive.
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns `true` when value is a string, otherwise `false`.
 */

function isString(value) {
  return typeof value === 'string';
}

export default isString;
