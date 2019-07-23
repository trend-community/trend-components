import React from 'react';

import useToken from './useToken';

function useOptions(name, options = {}, htmlProps = {}) {
  const hook = `use${name}Options`;
  React.useDebugValue(hook);
  const useHook = useToken(hook);

  return useHook
    ? { ...options, ...useHook(options, htmlProps) }
    : options;
}

export default useOptions;
