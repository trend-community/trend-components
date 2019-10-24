/**
 * Remove items from an array.
 *
 * @param {array} items - The array to filter.
 * @param {array} removeItems - The items to removed.
 * @returns {array} - A new array with items removed.
 */

function remove(items = [], removeItems = []) {
  return items
    .filter(item => !removeItems.includes(item));
}

export default remove;
