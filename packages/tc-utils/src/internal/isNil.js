/**
 * Checks if `value` is nullish (`null` or `undefined`).
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns true if value is `null` or `undefined`.
 */

function isNil(value) {
  return value == null;
}

export default isNil;
