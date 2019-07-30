import React from 'react';

import createComponent from '@trend/utils/createComponent';
import createUseHook from '@trend/utils/createUseHook';
import useApp from '@trend/utils/hooks/useApp';
import useAllRefs from '@trend/utils/hooks/useAllRefs';

const defaultStyle = {
  display: 'inline-block',
  fill: 'currentColor',
  verticalAlign: 'middle',
  height: 'auto',
  width: 'inherit'
};

const useIcon = createUseHook({
  name: 'Icon',
  compose: useApp,
  keys: ['size', 'unit'],
  useOptions: ({ size = 1, unit = 'em', ...options }, htmlProps) => ({
    size,
    unit,
    ...options
  }),
  useProps: ({ size, unit, ...options}, { ref, ...htmlProps }) => {
    const freshRef = React.useRef(null);
    const style = {
      ...defaultStyle,
      ...htmlProps.style
    };
    const formattedSize = `${parseFloat(size)}${unit}`;

    return {
      ref: useAllRefs(freshRef, ref),
      role: 'img',
      ...htmlProps,
      height: formattedSize,
      width: formattedSize,
      style
    };
  }
});

const Icon = createComponent({
  as: 'svg',
  useHook: useIcon
});

export { defaultStyle, useIcon };
export default Icon;
