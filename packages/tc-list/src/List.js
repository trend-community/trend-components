import React from 'react';
import cn from 'classnames';

import createComponent from '@trend/utils/createComponent';
import createUseHook from '@trend/utils/createUseHook';
import useApp from '@trend/utils/hooks/useApp';
import useAllRefs from '@trend/utils/hooks/useAllRefs';
import useClassnameOptions from '@trend/utils/hooks/useClassnameOptions';

import useListState from './useListState';
import { cssClasses } from './constants';

const useList = createUseHook({
  name: 'List',
  compose: [useApp, useClassnameOptions],
  optionProps: ['avatar', 'condense', 'extend', 'static'],
  useState: useListState,
  useOptions: ({
    avatar = false,
    classnameOptions = { ...cssClasses },
    condense = false,
    extend = false,
    static: isStatic = false,
    ...options
  }, _) => ({
    avatar,
    classnameOptions,
    condense,
    extend,
    isStatic,
    ...options
  }),
  useProps: ({ classnameOptions, ...options }, props) => ({
    ...props,
    className: cn(classnameOptions.root, props.className, {
      [classnameOptions.avatar]: options.avatar,
      [classnameOptions.condense]: options.condense,
      [classnameOptions.extend]: options.extend,
      [classnameOptions.static]: options.isStatic,
    })
  })
});

const List = createComponent({
  as: 'ul',
  useHook: useList
});

export { useList };
export default List;
