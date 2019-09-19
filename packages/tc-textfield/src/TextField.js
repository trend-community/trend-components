import React from 'react';
import cn from 'classnames';

import createComponent from '@trend/utils/createComponent';
import createUseHook from '@trend/utils/createUseHook';
import useApp from '@trend/utils/hooks/useApp';
import useAllCallbacks from '@trend/utils/hooks/useAllCallbacks';
import useAllRefs from '@trend/utils/hooks/useAllRefs';

import { cssClasses } from './constants';
import validator from './validator';
import useTextFieldState from './useTextFieldState';

const getModifier = modifier => modifier.replace(/^.*--/, '');
const isRim = variant => variant === getModifier(cssClasses.RIM);
const isTextarea = variant => variant === getModifier(cssClasses.TEXTAREA);

const useTextField = createUseHook({
  name: 'TextField',
  compose: useApp,
  optionProps: ['BeginningIcon', 'EndingIcon', 'stretch', 'variant', 'value'],
  useState: useTextFieldState,
  useOptions: ({
    classnameOptions = { ...cssClasses },
    ...options
  }, props) => ({ classnameOptions, ...options }),
  useProps: ({
    BeginningIcon,
    classnameOptions,
    EndingIcon,
    ...options }, props) => {
    const freshRef = React.useRef(null);
    const iconProps = {
      className: classnameOptions.ICON,
      size: 1.25
    };

    return {
      ...props,
      children: (
        <>
         {props.children}
         {BeginningIcon && <BeginningIcon {...iconProps} />}
         {EndingIcon && <EndingIcon {...iconProps} />}
        </>
      ),
      className: cn(classnameOptions.ROOT, props.className, {
        [classnameOptions.BEGINNING_ICON]: !!BeginningIcon,
        [classnameOptions.ENDING_ICON]: !!EndingIcon,
        [classnameOptions.RIM]: isRim(options.variant),
        [classnameOptions.TEXTAREA]: isTextarea(options.variant),
        [classnameOptions.STRETCH]: options.stretch,
        [classnameOptions.DISABLED]: options.isDisabled,
        [classnameOptions.FOCUSED]: options.isFocused,
        [classnameOptions.INVALID]: options.isInvalid,
      }),
      ref: useAllRefs(freshRef, props.ref)
    };
  }
});

const TextField = createComponent({
  as: 'div',
  useHook: useTextField
});

export { useTextField };
export default TextField;
