/**
 * @param {array} propObjects - An array of separate prop objects.
 * @param {function} filter - A function to filter out props.
 * @returns {object} - Object whose keys are the reduced props with all
 * assigned values in an array.
 */

function reduceObjects(propObjects, filter = () => true) {
  return propObjects.reduce((acc, curr) => {
    Object.keys(curr)
      .filter(key => filter(curr[key], key))
      .forEach(key => {
        acc[key] = [...(acc[key] || []), curr[key]];
      });

    return acc;
  }, {});
}

export default reduceObjects;
