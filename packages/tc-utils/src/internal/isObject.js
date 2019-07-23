/**
 * Test if argumnet is a object.
 * @param {*} value - The value to inspect.
 * @returns {boolean} - Returns `true` when `value` is an object else false.
 */

function isObject(value) {
  const type = typeof value;

  return type === 'function' || type === 'object' && !!value;
}

export default isObject;
