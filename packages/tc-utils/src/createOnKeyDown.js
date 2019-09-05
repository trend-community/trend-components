import isFunction from './internal/isFunction';

function createOnKeyDown({
  keyMap,
  onKey,
  onKeyDown,
  preventDefault = true,
  shouldKeyDown = () => true,
  stopPropagation
} = {}) {
  return event => {
    if (!keyMap) { return; }

    const finalKeyMap = isFunction(keyMap) ? keyMap(event) : keyMap;
    const shouldPreventDefault = isFunction(preventDefault)
      ? preventDefault(event)
      : preventDefault;
    const shouldStopPropagation = isFunction(stopPropagation)
      ? stopPropagation(event)
      : stopPropagation;

    if (event.key in finalKeyMap) {
      const action = finalKeyMap[event.key];

      if (isFunction(action) && shouldKeyDown(event)) {
        if (shouldPreventDefault) {
          event.preventDefault();
        }

        if (shouldStopPropagation) {
          event.stopPropagation();
        }

        if (onKey) {
          onKey(event);
        }

        action(event);
        // Prevent onKeyDown from being called twice for the same keys
        return;
      }
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  }
}

export default createOnKeyDown;
