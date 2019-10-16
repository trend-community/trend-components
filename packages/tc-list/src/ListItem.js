import React from 'react';
import cn from 'classnames';

import createComponent from '@trend/utils/createComponent';
import createUseHook from '@trend/utils/createUseHook';
import useApp from '@trend/utils/hooks/useApp';
import useAllRefs from '@trend/utils/hooks/useAllRefs';
import useAllCallbacks from '@trend/utils/hooks/useAllCallbacks';
import useClassnameOptions from '@trend/utils/hooks/useClassnameOptions';
import useId from '@trend/utils/hooks/useId';
import useUpdateEffect from '@trend/utils/hooks/useUpdateEffect';
import { useRover } from '@trend/rover';

import useListState from './useListState';
import { cssClasses } from './constants';

const useStaticListItem = createUseHook({
  name: 'StaticListItem',
  compose: [useApp, useClassnameOptions],
  optionProps: ['disabled'],
  useOptions: ({
    classnameOptions = { ...cssClasses },
    ...options
  }, _) => ({
    classnameOptions,
    ...options
  }),
  useProps: ({ classnameOptions, ...options}, props) => ({
    ...props,
    className: cn(classnameOptions.item, props.className, {
      [classnameOptions.disabled]: options.disabled,
    })
  })
});

const useListItem = createUseHook({
  name: 'ListItem',
  compose: [useRover, useStaticListItem],
  useState: useListState,
  useOptions: ({
    classnameOptions = { ...cssClasses },
    ...options
  }, _) => ({
    classnameOptions,
    ...options
  }),
  useProps: ({ classnameOptions, ...options }, props) => {
    const freshRef = React.useRef(null);
    const defaultId = useId('tc-list-');
    const id = options.tabStopId || props.id || defaultId;
    const isActive = options.activeId === id;
    const onClick = React.useCallback(() => {
      if (!options.disabled && !isActive) {
        options.setActive(id);
      }
    }, [options.disabled, isActive, options.setActive, id]);

    useUpdateEffect(() => {
      !isActive && freshRef.current.classList.add(classnameOptions.updating);
    }, [options.activeId]);

    const onTransitionEnd = () => {
      freshRef.current.classList.remove(classnameOptions.updating);
    };

    return {
      ...props,
      className: cn(props.className, {
        [classnameOptions.active]: isActive,
      }),
      id,
      onClick: useAllCallbacks(onClick, props.onClick),
      onTransitionEnd: useAllCallbacks(onTransitionEnd, props.onTranstionEnd),
      ref: useAllRefs(freshRef, props.ref)
    };
  }
});

const ListItem = createComponent({
  as: 'li',
  useHook: useListItem
});

export { useListItem, useStaticListItem };
export default ListItem;
