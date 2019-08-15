import React from 'react';

import { isNotEnv } from './internal/env';
import splitProps from './internal/splitProps';
import defaultUseCreateElement from './hooks/useCreateElement';

function createComponent({
  as: type,
  useHook,
  optionProps = (useHook && useHook.optionProps) || [],
  propsAreEqual: areEqual = useHook && useHook.propsAreEqual,
  useCreateElement = defaultUseCreateElement
}) {
  const Component = ({ as = type, ...props }, ref) => {
    function componentUseHook() {
      const [options, attrProps] = splitProps(props, optionProps);
      const { wrap, ...elementProps } = useHook(options, {
        ref,
        ...attrProps
      });

      const asOptionProps = as.optionProps;
      const asOptions = asOptionProps
        ? splitProps(props, asOptionProps)[0]
        : {};
      const element = useCreateElement(as, { ...elementProps, ...asOptions });

      return wrap ? wrap(element) : element;
    }

    return useHook ? componentUseHook() : useCreateElement(as, props);
  };

  Object.defineProperty(Component, 'optionProps', {
    value: optionProps,
    enumerable: true,
    writable: false
  });

  if (isNotEnv('production') && useHook) {
    Component.displayName = useHook.name.replace(/^use/, '');
  }

  return React.memo(React.forwardRef(Component), areEqual);
}

export default createComponent;
