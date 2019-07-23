import React from 'react';

import { isNotEnv } from './internal/env';
import splitProps from './internal/splitProps';
import defaultUseCreateElement from './hooks/useCreateElement';

function createComponent({
  as: type,
  useHook,
  keys = (useHook && useHook.__keys) || [],
  propsAreEqual: areEqual = useHook && useHook.__propsAreEqual,
  useCreateElement = defaultUseCreateElement
}) {
  const Component = ({ as = type, ...props }, ref) => {
    if (useHook) {
      const [options, htmlProps] = splitProps(props, keys);
      const { wrap, ...elementProps } = useHook(options, {
        ref,
        ...htmlProps
      });

      const asKeys = as.render ? as.render.__keys : as.__keys;
      const asOptions = asKeys ? splitProps(props, asKeys)[0] : {};
      const element = useCreateElement(
        as,
        { ...elementProps, ...asOptions }
      );

      return wrap ? wrap(element) : element;
    }

    return useCreateElement(as, props);
  };

  Component.__keys = keys;

  if (isNotEnv('production') && useHook) {
    Component.displayName = useHook.name.replace(/^use/, '');
  }

  return React.memo(React.forwardRef(Component), areEqual);
}

export default createComponent;
