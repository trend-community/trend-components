/**
 * @param {object} props
 * @param {array} keys
 * @return {Array<object, object} - An array of two objects (picked, omitted).
 */

export default function splitProps(props, keys) {
  const propsKeys = Object.keys(props);
  const picked = {};
  const omitted = {};

  propsKeys.forEach(key => {
    if (keys.indexOf(key) >= 0) {
      picked[key] = props[key];
    }
    else {
      omitted[key] = props[key];
    }
  });

  return [picked, omitted];
}
