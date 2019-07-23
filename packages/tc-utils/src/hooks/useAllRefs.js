/**
 * Hook that accepts any number of refs (object or funciton) and returns
 * a ref callback.
 */

import React from 'react';

import isFunction from '../internal/isFunction';

function useAllRefs(...refs) {
  return React.useCallback(instance => refs.forEach(ref => {
    if (!ref) {
      return;
    }

    if (isFunction(ref)) {
      return ref(instance);
    }

    ref.current = instance;
  }), refs);
}

export default useAllRefs;
