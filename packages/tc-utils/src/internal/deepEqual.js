import isObject from './isObject';
import has from './has';

function deepEqual(a, b, depth = 1) {
  if (a === b) {
    return true;
  }

  if (!a || !b) {
    return false;
  }

  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  const { length } = aKeys;

  if (bKeys.length !== length) {
    return false;
  }

  for (const key of aKeys) {
    if (a[key] !== b[key]) {
      if (!depth ||
        !isObject(a[key]) ||
        !isObject(b[key]) ||
        !deepEqual(a[key], b[key], depth - 1)) {
        return false;
      }
    }
  }

  return true;
}

export default deepEqual;
