import React from "react";

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

function useLockBodyScroll(targetRef, options) {
  const shouldPrevent = !options.modal
    ? false
    : Boolean(options.preventBodyScroll && options.visible);

  React.useEffect(() => {
    const element = targetRef.current;

    if (!element || !shouldPrevent) {
      return undefined;
    }

    disableBodyScroll(element);

    return () => enableBodyScroll(element);
  }, [targetRef, shouldPrevent]);
}

export default useLockBodyScroll;
