// https://github.com/reakit/reakit/blob/master/packages/reakit-utils/src/tabbable.ts

const selector = 'input, select, textarea, a[href], button, [tabindex], audio[controls], video[controls], [contenteditable]:not([contenteditable=false])';

function isHTMLElement(element) {
  return element instanceof HTMLElement;
}

function isDisabled(element) {
  return Boolean(element.disabled);
}

function hasTabIndex(element) {
  return element.hasAttribute('tabindex');
}

function hasNegativeTabIndex(element) {
  return hasTabIndex(element) && element.tabIndex < 0;
}

function isHidden(element) {
  if (element.parentElement && isHidden(element.parentElement)) {
    return true;
  }

  return element.hidden;
}

function isContentEditable(element) {
  const value = element.getAttribute('contenteditable');

  return value !== 'false' && value != null;
}

export function isFocusable(element) {
  if (!isHTMLElement(element)) {
    return false;
  }

  if (isHidden(element)) {
    return false;
  }

  if (isDisabled(element)) {
    return false;
  }

  const { localName } = element;
  const focusableTags = ['input', 'select', 'textarea', 'button'];

  if (focusableTags.indexOf(localName) >= 0) {
    return true;
  }

  const others = {
    a: () => element.hasAttribute('href'),
    audio: () => element.hasAttribute('controls'),
    video: () => element.hasAttribute('controls')
  };

  if (localName in others) {
    return others[localName]();
  }

  if (isContentEditable(element)) {
    return true;
  }

  return hasTabIndex(element);
}

export function isTabbable(element) {
  if (!isHTMLElement(element)) {
    return false;
  }

  if (!isFocusable(element)) {
    return false;
  }

  if (hasNegativeTabIndex(element)) {
    return false;
  }

  return true;
}

export function getAllFocusableIn(container) {
  const allFocusable = Array.from(container.querySelectorAll(selector));

  return allFocusable.filter(isFocusable);
}

export function getFirstFocusableIn(container) {
  const allFocusable = getAllFocusableIn(container);

  return allFocusable.length ? allFocusable[0] : null;
}

export function getAllTabbableIn(container, fallbackToFocusable) {
  const allFocusable = Array.from(container.querySelectorAll(selector));
  const allTabbable = allFocusable.filter(isTabbable);

  if (!allTabbable.length && fallbackToFocusable) {
    return allFocusable;
  }

  return allTabbable;
}

export function getFirstTabbableIn(container, fallbackToFocusable) {
  const [first] = getAllTabbableIn(container, fallbackToFocusable);

  return first || null;
}

export function getLastTabbableIn(container, fallbackToFocusable) {
  const allTabbable = getAllTabbableIn(container, fallbackToFocusable);

  return allTabbable[allTabbable.length - 1] || null;
}

export function getNextTabbableIn(container, fallbackToFocusable) {
  const allFocusable = getAllFocusableIn(container);
  const index = allFocusable.indexOf(document.activeElement);
  const slice = allFocusable.slice(index + 1);

  return (slice.find(isTabbable) ||
    allFocusable.find(isTabbable) ||
    (fallbackToFocusable ? slice[0] : null));
}

export function getPreviousTabbableIn(container, fallbackToFocusable) {
  const allFocusable = getAllFocusableIn(container).reverse();
  const index = allFocusable.indexOf(document.activeElement);
  const slice = allFocusable.slice(index + 1);

  return (slice.find(isTabbable) ||
    allFocusable.find(isTabbable) ||
    (fallbackToFocusable ? slice[0] : null));
}

export function focusNextTabbableIn(container, fallbackToFocusable) {
  const nextTabbable = getNextTabbableIn(container, fallbackToFocusable);

  if (nextTabbable && isHTMLElement(nextTabbable)) {
    nextTabbable.focus();
  }
}

export function focusPreviousTabbableIn(container, fallbackToFocusable) {
  const previousTabbable = getPreviousTabbableIn(
    container,
    fallbackToFocusable
  );

  if (previousTabbable && isHTMLElement(previousTabbable)) {
    previousTabbable.focus();
  }
}

export function ensureFocus(
  element,
  {
    isActive = defaultIsActive,
    preventScroll
  } = {}) {
  if (isActive(element)) {
    return -1;
  }

  element.focus({ preventScroll });

  if (isActive(element)) {
    return -1;
  }

  return requestAnimationFrame(() => {
    element.focus({ preventScroll });
  });
}
