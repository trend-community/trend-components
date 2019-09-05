import React from 'react';

import createComponent from '@trend/utils/createComponent';
import createOnKeyDown from '@trend/utils/createOnKeyDown';
import createUseHook from '@trend/utils/createUseHook';
import useAllCallbacks from '@trend/utils/hooks/useAllCallbacks';
import useAllRefs from '@trend/utils/hooks/useAllRefs';
import useId from '@trend/utils/hooks/useId';
import useUpdateEffect from '@trend/utils/hooks/useUpdateEffect';
import { useInteractive } from '@trend/interactive';

import useRoverState from './useRoverState';

const useRover = createUseHook({
  name: 'Rover',
  compose: useInteractive,
  optionProps: ['tabStopId'],
  useState: useRoverState,
  useProps: ({
    currentId,
    tabStops,
    ...options
  },
  {
    ref,
    tabIndex,
    ...props
  }) => {
    const freshRef = React.useRef(null);
    const id = useId('tc-rover-');
    const tabStopId = options.tabStopId || props.id || id;
    const isDisabled = options.disabled && !options.focusable;
    const isNotFocused = currentId == null;
    const isFocused = currentId === tabStopId;
    const isFirst = tabStops[0] && tabStops[0].id === tabStopId;
    const shouldTabIndex = isFocused || (isFirst && isNotFocused);

    React.useEffect(() => {
      if (isDisabled) {
        return undefined;
      }

      options.register(tabStopId, freshRef);

      return () => options.unregister(tabStopId);

    }, [tabStopId, isDisabled, options.register, options.unregister]);

    useUpdateEffect(() => {
      if (!freshRef.current) {
        return;
      }

      if (document.activeElement !== freshRef.current && isFocused) {
        freshRef.current.focus();
      }
    }, [isFocused]);

    const onFocus = React.useCallback(
      () => options.move(tabStopId),
      [options.move, tabStopId]
    );

    const onKeyDown = React.useMemo(() => createOnKeyDown({
      keyMap: {
        ArrowUp: options.orientation !== 'horizontal' && options.previous,
        ArrowRight: options.orientation !== 'vertical' && options.next,
        ArrowDown: options.orientation !== 'horizontal' && options.next,
        ArrowLeft: options.orientation !== 'vertical' && options.previous,
        Home: options.first,
        End: options.last,
        PageUp: options.first,
        PageDown: options.last
      },
      onKeyDown: props.onKeyDown
    }), [
      props.onKeyDown,
      options.first,
      options.last,
      options.next,
      options.previous,
      options.orientation
    ]);

    return {
      id: tabStopId,
      onFocus: useAllCallbacks(onFocus, props.onFocus),
      onKeyDown,
      ref: useAllRefs(freshRef, ref),
      tabIndex: shouldTabIndex ? props.tabIndex : -1,
      ...props
    };
  }
});

const Rover = createComponent({
  as: 'button',
  useHook: useRover
});

export { useRover };
export default Rover;
