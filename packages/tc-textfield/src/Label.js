import React from 'react';
import cn from 'classnames';

import createComponent from '@trend/utils/createComponent';
import createUseHook from '@trend/utils/createUseHook';
import useApp from '@trend/utils/hooks/useApp';
import useAllCallbacks from '@trend/utils/hooks/useAllCallbacks';

import { cssClasses } from './constants';
import useTextFieldState from './useTextFieldState';

const useTextFieldLabel = createUseHook({
  name: 'TextFieldLabel',
  compose: useApp,
  optionProps: ['value'],
  useState: useTextFieldState,
  useProps: ({
    classnameOptions = { ...cssClasses }, ...options }, props) => ({
    ...props,
    className: cn(classnameOptions.LABEL, props.className, {
      [classnameOptions.ACTIVE]: options.isFocused || options.isDirty
    }),
    htmlFor: options.textFieldId || props.id || undefined
  })
});

const Label = createComponent({
  as: 'label',
  useHook: useTextFieldLabel
});

export { useTextFieldLabel };
export default Label;
