import React from 'react';

function usePipe(...fns) {
  return React.useCallback(arg => (
    fns
      .filter(Boolean)
      .reduce((acc, curr) => curr(acc), arg)
  ), fns);
}

export default usePipe;
