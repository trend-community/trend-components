/**
 * A tiny warning alternative.
 *
 * @param {*} condition
 * @param {string} message - The message to console.
 * @example
 *   warning(trutyValue, 'This will not log anything.');
 *   warning(falsyValue, 'This will log a warning.');
 *   // console.warn('[trend-components] This will log a warning.')
 * @resource https://github.com/alexreardon/tiny-warning
 */

const isProduction = process.env.NODE_ENV === 'production';

function warning(condition, message) {
  if (!isProduction) {
    // Return out quickly for truthy conditions.
    if (!condition) {
      return;
    }

    const text = `[trend-components]\n${message}`;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    // Throwing an error and catching it immediately to improve debugging.
    // A consumer can use 'pause on caught exceptions'
    // https://github.com/facebook/react/issues/4216
    try {
      throw Error(text);
    }
    catch (x) {}
  }
}

export default warning;
