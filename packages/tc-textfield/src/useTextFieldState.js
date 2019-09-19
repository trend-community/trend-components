import React from 'react'

import setOptions from '@trend/utils/internal/setOptions';
import useClosedState from '@trend/utils/hooks/useClosedState';
import useId from '@trend/utils/hooks/useId';
import useToggle from '@trend/utils/hooks/useToggle';

import { cssClasses } from './constants';
import validator from './validator';

const optionProps = [
  'blur',
  'helperId',
  'helperMessage',
  'change',
  'classnameOptions',
  'focus',
  'isDirty',
  'isDisabled',
  'isFocused',
  'isInvalid',
  'textFieldId'
];

function useTextFieldState(initialState = {}) {
  const defaultId = useId('tc-textfield-');
  const {
    classnameOptions: initialClassnameOptions = {},
    helperMessage: initHelperMsg = '',
    isDisabled = false,
    textFieldId = defaultId,
    validators = null,
    value: initialValue = ''
  } = useClosedState(initialState);
  const getHelperMessage = () => !!initHelperMsg.length ? initHelperMsg : null;
  const [value, setValue] = React.useState(initialValue);
  const [isFocused, focus] = useToggle(false);
  const [isDirty, setDirty] = React.useState(false);
  const [isInvalid, setInvalid] = React.useState(false);
  const [helperMessage, setHelperMessage] = React.useState(
    getHelperMessage()
  );

  React.useEffect(() => {
    setDirty(!!value);
  }, []);

  // Handlers
  const blur = React.useCallback(evt => {
    const target = evt && evt.target;
    const errors = validator(target, validators);

    setDirty(!!value || !!(target && target.value));
    focus(false);
    setInvalid(!!errors.length);
    setHelperMessage(errors.length
      ? errors[0].message
      : getHelperMessage()
    );
  }, [isFocused, isDirty, isInvalid, helperMessage]);

  const change = React.useCallback(evt => {
    const target = evt && evt.target;
    const errors = validator(target, validators);

    setValue(target && target.value);
    setInvalid(!!errors.length);
    setHelperMessage(errors.length
      ? errors[0].message
      : getHelperMessage()
    );
  }, [value, isInvalid, helperMessage]);

  return {
    classnameOptions: { ...cssClasses, ...initialClassnameOptions },
    helperId: `${textFieldId}-helper-text`,
    isDirty,
    isDisabled,
    isFocused,
    isInvalid,
    blur,
    change,
    focus,
    textFieldId,
    helperMessage,
    value
  };
}

export default setOptions(useTextFieldState, optionProps);
