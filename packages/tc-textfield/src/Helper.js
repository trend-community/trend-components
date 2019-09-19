import React from 'react';
import cn from 'classnames';

import createComponent from '@trend/utils/createComponent';
import createUseHook from '@trend/utils/createUseHook';
import useApp from '@trend/utils/hooks/useApp';
import useAllCallbacks from '@trend/utils/hooks/useAllCallbacks';
import useAllRefs from '@trend/utils/hooks/useAllRefs';
import useCreateElement from '@trend/utils/hooks/useCreateElement';

import { cssClasses } from './constants';
import validator from './validator';
import useTextFieldState from './useTextFieldState';

const useTextFieldHelper = createUseHook({
  name: 'TextFieldHelper',
  compose: useApp,
  useState: useTextFieldState,
  useOptions: ({
    classnameOptions = { ...cssClasses },
    helperId = undefined,
    ...options
  }, props) => ({ classnameOptions, helperId, ...options }),
  useProps: (options, { children, ...props }) => {
    const freshRef = React.useRef(null);
    const hasHelperMessage = () => (
      !!options.helperMessage && !!options.helperMessage.length
    );

    const freshProps = {
      ...props,
      className: cn(options.classnameOptions.HELPER, props.className),
      id: options.helperId,
      ref: useAllRefs(freshRef, props.ref)
    };

    return {
      children: (
        hasHelperMessage()
          ? <div {...freshProps}><span>{options.helperMessage}</span></div>
          : false
      )
    }
  }
});

const TextFieldHelper = createComponent({
  as: React.Fragment,
  useHook: useTextFieldHelper
});

export { useTextFieldHelper };
export default TextFieldHelper;
