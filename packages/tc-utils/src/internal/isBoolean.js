/**
 * Checks if `value` is a boolean primitive.
 *
 * @param {*} - The value to check.
 * @returns {boolean} - Returns `true` if value is a boolean, else `false`.
 */

function isBoolean(value) {
  return value === true || value === false;
}

export default isBoolean;
