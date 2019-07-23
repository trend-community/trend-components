/**
 * Checks if `value` is a `Function` object.
 *
 * @param {*} value - The value to tested.
 * @returns {boolean}
 */

import isObject from './isObject';

const toString = Object.prototype.toString;

function isFunction(value) {
  const tag = value == null
    ? value === undefined ? '[object Undefined]' : '[object Null]'
    : toString.call(value);

  return isObject(value)
    ? tag == '[object Function]' ||
      tag == '[object AsyncFunction]' ||
      tag == '[object GeneratorFunction]' ||
      tag == '[object Proxy]'
    : false;
}

export default isFunction;
