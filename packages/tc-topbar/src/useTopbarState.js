import React from 'react'

import setOptions from '@trend/utils/internal/setOptions';
import useClosedState from '@trend/utils/hooks/useClosedState';

import { classNames } from './constants';

const optionProps = [
  'classnameOptions',
  'height',
  'isScrolling',
  'scrollTarget',
  'top'
];

function useTopbarState(initialState = {}) {
  const {
    classnameOptions: initialClassnameOptions = {},
    scrollTarget = window
  } = useClosedState(initialState);
  const [height, setHeight] = React.useState(0);
  const [top, setTop] = React.useState(0);
  const [isScrolling, setIsScrolling] = React.useState(false);

  return {
    classnameOptions: { ...classNames, ...initialClassnameOptions },
    height,
    isScrolling,
    scrollTarget,
    top
  };
}

export default setOptions(useTopbarState, optionProps);
