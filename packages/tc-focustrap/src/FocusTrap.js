import React from 'react';
import createFocusTrap from 'focus-trap';

import isNil from '@trend/utils/internal/isNil';
import not from '@trend/utils/internal/not';
import createComponent from '@trend/utils/createComponent'
import createUseHook from '@trend/utils/createUseHook';
import useApp from '@trend/utils/hooks/useApp';
import useAllRefs from '@trend/utils/hooks/useAllRefs';

function filterFocusTrapOptions(options) {
  return Object.keys(options)
    .filter(key => not(isNil)(options[key]))
    .reduce((res, key) => (res[key] = options[key], res), {});
}

const useFocusTrap = createUseHook({
  name: 'FocusTrap',
  compose: useApp,
  optionProps: [
    '__createFocusTrap__',
    'shouldTrap',
    'active',
    'focusTrapOptions',
    'paused',
    'onActivate',
    'onDeactivate',
    'initialFocus',
    'fallbackFocus',
    'escapeDeactivates',
    'clickOutsideDeactivates',
    'returnFocusOnDeactivate',
    'setReturnFocus',
    'allowOutsideClick',
  ],
  useOptions: ({
    __createFocusTrap__ = createFocusTrap,
    shouldTrap = true,
    active = true,
    onActivate = () => {},
    onDeactivate = () => {},
    initialFocus = null,
    fallbackFocus = null,
    escapeDeactivates = true,
    clickOutsideDeactivates = false,
    returnFocusOnDeactivate = true,
    setReturnFocus = null,
    allowOutsideClick = null,
    paused = false,
    ...options
  }) => ({
    __createFocusTrap__,
    shouldTrap,
    active,
    focusTrapOptions: {
      onActivate,
      onDeactivate,
      initialFocus,
      fallbackFocus,
      escapeDeactivates,
      clickOutsideDeactivates,
      returnFocusOnDeactivate,
      setReturnFocus,
      allowOutsideClick
    },
    paused,
    ...options
  }),
  useProps: (options, { ref, ...props }) => {
    const freshRef = React.useRef(null);
    const shouldTrap = options.shouldTrap;
    const previouslyFocusedElement = React.useRef(null);
    const focustrap = React.useRef(null);
    const dataFocustrap = shouldTrap
      ? options.active ? 'active' : 'paused'
      : undefined;

    if (typeof document !== 'undefined') {
      previouslyFocusedElement.current = document.activeElement;
    }

    React.useEffect(() => {
      if (!shouldTrap) {
        return;
      }

      focustrap.current = options.__createFocusTrap__(
        freshRef.current,
        filterFocusTrapOptions(options.focusTrapOptions)
      );

      if (options.active) {
        focustrap.current.activate();
      }

      if (options.paused) {
        focustrap.current.pause();
      }
    }, [shouldTrap]);

    React.useEffect(() => {
      return focustrap.current
        ? () => {
            focustrap.current.deactivate();

            if (
              options.focusTrapOptions.returnFocusOnDeactivate !== false &&
              previouslyFocusedElement &&
              previouslyFocusedElement.focus
            ) {
              previouslyFocusedElement.focus();
            }
          }
        : undefined;
    }, []);

    React.useEffect(() => {
      if (shouldTrap) {
        const { returnFocusOnDeactivate } = options.focusTrapOptions;

        options.active
          ? focustrap.current.activate()
          : focustrap.current.deactivate({
              returnFocus: returnFocusOnDeactivate || false
            });
      }
    }, [options.active, shouldTrap]);

    React.useEffect(() => {
      if (shouldTrap) {
        options.paused
          ? focustrap.current.pause()
          : focustrap.current.unpause();
      }
    }, [options.paused, shouldTrap]);

    return {
      'data-focustrap': dataFocustrap,
      ref: useAllRefs(freshRef, ref),
      ...props
    };
  }
});

const FocusTrap = createComponent({
  as: 'div',
  useHook: useFocusTrap
});

export { useFocusTrap };
export default FocusTrap;
