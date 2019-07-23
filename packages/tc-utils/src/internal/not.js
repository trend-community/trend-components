/**
 * Negate a predicate function.
 *
 * param {function} fn - The function to negate.
 * @returns {function} - A negated function.
 */

import isFunction from './isFunction';

function not(fn) {
  if (!isFunction(fn)) {
    throw new Error('Expected a function to be passed in.');
  }

  return function negated(...args) {
    return !fn(...args);
  }
}

export default not;
