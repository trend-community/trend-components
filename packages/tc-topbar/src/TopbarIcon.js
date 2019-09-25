import React from 'react';
import cn from 'classnames';

import createComponent from '@trend/utils/createComponent';
import createUseHook from '@trend/utils/createUseHook';
import useApp from '@trend/utils/hooks/useApp';
import useClassnameOptions from '@trend/utils/hooks/useClassnameOptions';

import { classNames } from './constants';

const useTopbarIcon = createUseHook({
  name: 'TopbarIcon',
  compose: [useApp, useClassnameOptions],
  useOptions: (
    { classnameOptions = { ...classNames },
    ...options
    },
    props) => ({
      classnameOptions,
      ...options
    }),
  useProps: (options, props) => ({
    ...props,
    className: cn(options.classnameOptions.ICON, props.className)
  })
});

const TopbarIcon = createComponent({
  as: 'button',
  useHook: useTopbarIcon
});

export { useTopbarIcon };
export default TopbarIcon;
