/**
 * Takes a value and returns an array with value injected in it.
 *
 * @param {*} value - The value to put in an array.
 * @returns {array}
 */

function toArray(value) {
  return Array.isArray(value)
    ? value
    : typeof value !== 'undefined' ? [value] : [];
}

export default toArray;
