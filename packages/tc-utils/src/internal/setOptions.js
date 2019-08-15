/**
 * Set an optionProps array to an object that is enumerable but not writable.
 * @param {object} obj - The object to set the property to.
 * @param {array} arr - The array of props to set.
 * @ereturn {object} - The object passed in.
 */

import not from './not';

function setOptions(obj, arr) {
  if (not(Array.isArray)(arr)) {
    throw ('Value passed to `arr` was not an array.');
  }

  return Object.defineProperty(obj, 'optionProps', {
    value: arr,
    enumerable: true,
    writable: false
  });
}

export default setOptions;
