/**
 * React hook that tracks a boolean value.
 */

import React from 'react';

import isBoolean from '../internal/isBoolean';
import not from '../internal/not';

function useToggle(initValue = false) {
  if (not(isBoolean)(initValue)) {
    throw Error(`useToggle requires a Boolean value. Received: ${initValue}`);
  }

  const [value, setValue] = React.useState(initValue);
  const toggle = React.useCallback(
    nextValue => {
      setValue(isBoolean(nextValue) ? nextValue : prevValue => !prevValue);
    },
    [setValue]
  );

  return [value, toggle];
}

export default useToggle;
