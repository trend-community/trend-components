import React from 'react';

function useHideRootElement(options) {
  if (!options.rootElement) {
    return;
  }

  React.useEffect(() => {
    const root = document.querySelector(options.rootElement)

    if (options.visible) {
      root.setAttribute('aria-hidden', 'true');
    }
    else {
      root.removeAttribute('aria-hidden');
    }

    return () => {
      root.removeAttribute('aria-hidden');
    }
  }, [options.visible, options.rootElement]);
}

export default useHideRootElement;
