import React from 'react';

import {
  createComponent,
  createUseHook,
  useApp,
  useAllCallbacks,
  useAllRefs,
  useRefEffect
} from '@trend/utils';

import not from '@trend/utils/internal/not';

const CLICKABLE_KEYS = ['Enter', ' '];
const INTERACTIVE_ELEMENTS = [
  HTMLAnchorElement,
  HTMLAudioElement,
  HTMLButtonElement,
  HTMLInputElement,
  HTMLSelectElement,
  HTMLTextAreaElement,
  HTMLVideoElement
];

function isInteractive(node, elements = INTERACTIVE_ELEMENTS) {
  return elements.some(element => node instanceof element);
}

function naiveIncludes(arr, item) {
  return arr.indexOf(item) !== -1;
}

const useInteractive = createUseHook({
  name: 'Interactive',
  compose: useApp,
  keys: ['disabled', 'focusable', 'clickableKeys'],
  useOptions: ({ clickableKeys = CLICKABLE_KEYS, ...options }, htmlProps) => ({
    clickableKeys,
    disabled: htmlProps.disabled,
    ...options
  }),
  useProps: (
    options,
    {
      onClick = () => {},
      onKeyDown = () => {},
      onMouseOver = () => {},
      onMouseDown = () => {},
      ref,
      tabIndex = 0,
      ...htmlProps
    }
  ) => {
    const freshRef = React.useRef(null);
    const clickableKeysRef = useRefEffect(options.clickableKeys);
    const isDisabled = options.disabled && !options.focusable;

    return {
      ref: useAllRefs(freshRef, ref),
      disabled: isDisabled,
      tabIndex: isDisabled ? undefined : tabIndex,
      'aria-disabled': options.disabled,
      onClick: React.useCallback(event => {
        if (options.disabled) {
          event.stopPropagation();
          event.preventDefault();
        }
        else {
          onClick(event);
        }
      }, [options.disabled, onClick]),
      onKeyDown: useAllCallbacks(React.useCallback(event => {
        const isNotClickKey = not(() => clickableKeysRef.current &&
          naiveIncludes(clickableKeysRef.current, event.key));
         const isNativeClick = () => naiveIncludes(CLICKABLE_KEYS, event.key)
           && isInteractive(event.target);

        if (options.disabled || isNotClickKey() || isNativeClick()) {
          return;
        }

        event.preventDefault();
        event.target.dispatchEvent(new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: false
        }));
      }, [clickableKeysRef, options.disabled]), onKeyDown),
      onMouseDown: React.useCallback(event => {
        if (isInteractive(event.target, [HTMLInputElement])) {
          return onMouseDown(event);
        }

        event.preventDefault();

        if (options.disabled) {
          event.stopPropagation();
        }
        else {
          (freshRef.current || event.target).focus();
          onMouseDown(event);
        }
      }, [options.disabled, onMouseDown]),
      onMouseOver: React.useCallback(event => {
        if (options.disabled) {
          event.stopPropagation();
          event.preventDefault();
        }
        else {
          onMouseOver(event);
        }
      }, [options.disabled, onMouseOver]),
      ...htmlProps
    };
  }
});

const Interactive = createComponent({
  as: 'button',
  useHook: useInteractive
});

export { useInteractive, CLICKABLE_KEYS };
export default Interactive;
