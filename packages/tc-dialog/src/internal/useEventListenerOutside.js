import React from 'react';

import useRefEffect from '@trend/utils/hooks/useRefEffect';
import warning from '@trend/utils/warning';
import isFocusTrap from "@trend/focustrap/isFocusTrap";

function useEventListenerOutside(
  targetRef, disclosureRef, nestedDialogs, event, listener, shouldListen) {
  const listenerRef = useRefEffect(listener);

  React.useEffect(() => {
    if (!shouldListen) {
      return undefined;
    }

    const handleEvent = e => {
      if (!listenerRef.current) {
        return;
      }

      const element = targetRef.current;
      const disclosure = disclosureRef.current;
      const target = e.target;
      warning(!element, 'Dialog can\'t detect events outside dialog because `ref` wasn\'t passed to component.');

      // Click inside
      if (!element || element.contains(target)) {
        return;
      }

      // Click on disclosure
      if (disclosure && disclosure.contains(target)) {
        return;
      }

      // Click inside a nested dialog or focus trap
      if (isFocusTrap(target) ||
        nestedDialogs.find(dialog => Boolean(
          dialog.current && dialog.current.contains(target)))) {
        return;
      }

      listenerRef.current(e);
    };

    document.addEventListener(event, handleEvent, true);

    return () => {
      document.removeEventListener(event, handleEvent, true);
    };
  }, [
    targetRef,
    event,
    shouldListen,
    nestedDialogs,
    listenerRef,
    disclosureRef
  ]);
}

export default useEventListenerOutside;
