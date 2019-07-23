/**
 * Hook that accepts any number of callbacks and returns a `useCallback` hook.
 */

import React from 'react';

import isFunction from '../internal/isFunction';

function useAllCallbacks(...cbs) {
  return React.useCallback((...args) => {
    cbs
      .filter(isFunction)
      .forEach(cb => cb(...args));
  }, cbs);
}

export default useAllCallbacks;
