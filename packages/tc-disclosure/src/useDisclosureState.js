import React from 'react';

import useClosedState from '@trend/utils/hooks/useClosedState';
import useId from '@trend/utils/hooks/useId';
import useToggle from '@trend/utils/hooks/useToggle';

function useState(initialState = {}) {
  const defaultId = useId('tc-disclosure-');
  const {
    disclosureId = defaultId,
    visible: isVisible = false
  } = useClosedState(initialState);
  const [visible, toggle] = useToggle(isVisible);

  return {
    disclosureId,
    visible,
    show: React.useCallback(() => toggle(true), []),
    hide: React.useCallback(() => toggle(false), []),
    toggle
  };
}

useState.__keys = ['disclosureId', 'hide', 'show', 'visible', 'toggle'];

export default useState;
