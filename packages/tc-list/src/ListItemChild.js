import React from 'react';
import cn from 'classnames';

import createComponent from '@trend/utils/createComponent';
import createUseHook from '@trend/utils/createUseHook';
import useApp from '@trend/utils/hooks/useApp';
import useClassnameOptions from '@trend/utils/hooks/useClassnameOptions';

import useListState from './useListState';
import { cssClasses } from './constants';

const useListItemChild = createUseHook({
  name: 'ListItemChild',
  compose: [useApp, useClassnameOptions],
  optionProps: ['variant'],
  useOptions: ({
    classnameOptions = { ...cssClasses },
    variant = 'text',
    ...options
  }, _) => ({
    classnameOptions,
    variant,
    ...options
  }),
  useProps: ({ classnameOptions: cx, ...options }, props) => ({
    ...props,
    className: cn({
      [cx['item-media']]: options.variant === 'media',
      [cx['item-text']]: options.variant === 'text',
      [cx['item-meta']]: options.variant === 'meta',
      [cx['item-primary']]: options.variant === 'primary',
      [cx['item-ancillary']]: options.variant === 'ancillary',
    })
  })
});

const ListItemChild = createComponent({
  as: 'span',
  useHook: useListItemChild
});

export { useListItemChild };
export default ListItemChild;
