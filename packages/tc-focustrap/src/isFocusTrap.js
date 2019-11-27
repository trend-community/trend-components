/**
 * Simple predicate to test if element passed in was designated as a
 * focustrap element.
 */

function isFocusTrap(element = document.createElement('div')) {
  return element.dataset.focustrap === 'active';
}

export default isFocusTrap;
