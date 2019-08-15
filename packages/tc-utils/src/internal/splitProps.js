/**
 * @param {object} props
 * @param {array} optionProps
 * @return {Array<object, object} - An array of two objects (options, attrProps).
 */

export default function splitProps(props, optionProps) {
  const propsKeys = Object.keys(props);
  const options = {};
  const attrProps = {};

  propsKeys.forEach(key => {
    if (optionProps.indexOf(key) >= 0) {
      options[key] = props[key];
    } else {
      attrProps[key] = props[key];
    }
  });

  return [options, attrProps];
}
