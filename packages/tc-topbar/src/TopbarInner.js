import React from 'react';
import cn from 'classnames';

import createComponent from '@trend/utils/createComponent';
import createUseHook from '@trend/utils/createUseHook';
import useApp from '@trend/utils/hooks/useApp';
import useAllRefs from '@trend/utils/hooks/useAllRefs';
import useClassnameOptions from '@trend/utils/hooks/useClassnameOptions';

import { classNames } from './constants';

const useTopbarInner = createUseHook({
  name: 'TopbarInner',
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
    className: cn(options.classnameOptions.INNER, props.className)
  })
});

const TopbarInner = createComponent({
  as: 'div',
  useHook: useTopbarInner
});

export { useTopbarInner };
export default TopbarInner;
