import React from 'react';

import useClosedState from '@trend/utils/hooks/useClosedState';
import useRoverState from '@trend/rover/useRoverState';
import setOptions from '@trend/utils/internal/setOptions';

import { cssClasses } from './constants';

const optionProps = [
  'activeId',
  'setActive',
  ...useRoverState.optionProps
];

function useListState(initialState = {}) {
  const {
    activeId: initialActiveId = null,
    orientation = 'vertical',
    ...state
  } = useClosedState(initialState);
  const [activeId, setActive] = React.useState(initialActiveId);
  const roverState = useRoverState({ orientation, ...state });

  return {
    ...roverState,
    activeId,
    setActive
  };
}

export default setOptions(useListState, optionProps);
