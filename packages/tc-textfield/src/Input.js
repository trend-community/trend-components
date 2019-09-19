import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import createComponent from '@trend/utils/createComponent';
import createUseHook from '@trend/utils/createUseHook';
import useApp from '@trend/utils/hooks/useApp';
import useAllCallbacks from '@trend/utils/hooks/useAllCallbacks';
import useAllRefs from '@trend/utils/hooks/useAllRefs';

import { validations } from './validator';
import { cssClasses } from './constants';
import useTextFieldState from './useTextFieldState';

const validators = Object.keys(validations);
const noop = () => {};

const useTextFieldInput = createUseHook({
  name: 'TextFieldInput',
  compose: useApp,
  useState: useTextFieldState,
  useOptions: ({
    classnameOptions = { ...cssClasses },
    blur = noop,
    change = noop,
    focus = noop,
    ...options,
  }, _) => ({
    classnameOptions,
    blur,
    change,
    focus,
    ...options
  }),
  useProps: (options, {
    onBlur = noop,
    onChange = noop,
    onFocus = noop,
    type: initialType = 'text',
    ...props
  }) => {
    const freshRef = React.useRef(null);
    const hasValidations = props => {
      return validators.some(v => props.hasOwnProperty(v))
    };
    const hasHelperMessage = () => (
      !!options.helperMessage && !!options.helperMessage.length
    );
    const [type, setType] = React.useState(initialType);

    React.useEffect(() => {
      setType(freshRef.current.nodeName !== 'TEXTAREA'
        ? initialType
        : undefined);
    }, []);

    return {
      ...props,
      'aria-controls':
        hasValidations(props) && hasHelperMessage()
          ? options.helperId
          : undefined,
      'aria-invalid': options.isInvalid,
      'aria-describedby': hasHelperMessage()
        ? options.helperId
        : undefined,
      className: cn(options.classnameOptions.INPUT, props.className),
      disabled: options.isDisabled,
      id: options.textFieldId || props.id || undefined,
      onBlur: useAllCallbacks(options.blur, onBlur),
      onChange: useAllCallbacks(options.change, onChange),
      onFocus: useAllCallbacks(options.focus, onFocus),
      ref: useAllRefs(freshRef, props.ref),
      type
    };
  }
});

const Input = createComponent({
  as: 'input',
  useHook: useTextFieldInput
});

export { useTextFieldInput };
export default Input;
