import React from 'react';
import cn from 'classnames';

import createComponent from '@trend/utils/createComponent';
import createUseHook from '@trend/utils/createUseHook';
import useApp from '@trend/utils/hooks/useApp';
import useClassnameOptions from '@trend/utils/hooks/useClassnameOptions';

import { classNames } from './constants';

const useTopbarTitle = createUseHook({
  name: 'TopbarTitle',
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
    className: cn(options.classnameOptions.TITLE, props.className)
  })
});

const TopbarTitle = createComponent({
  as: 'span',
  useHook: useTopbarTitle
});

export { useTopbarTitle };
export default TopbarTitle;
