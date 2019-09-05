// Resouce: https://github.com/streamich/react-use/blob/master/src/useUpdateEffect.ts

import React from 'react';

function useUpdateEffect(effect, deps) {
  const isMounted = React.useRef(true);

  React.useEffect(() => {
    if (isMounted.current) {
      isMounted.current = false;
    } else {
      return effect();
    }
  }, deps);
}

export default useUpdateEffect;
