import React from 'react';

import useToken from './useToken';

function useProps(name, options = {}, htmlProps = {}) {
  const hook = `use${name}Props`;
  React.useDebugValue(hook);
  const useHook = useToken(hook);

  return useHook ? useHook(options, htmlProps) : htmlProps;
}

export default useProps;
