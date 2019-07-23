import React from 'react';

import AppContext from '../state/AppContext';
import isFunction from '../internal/isFunction';

function useCreateElement(type, props, children = props.children) {
  const ctx = React.useContext(AppContext);

  return ctx.useCreateElement
    ? ctx.useCreateElement(type, props, children)
    : isFunction(children)
      ? children(props)
      : React.createElement(type, props, children);
}

export default useCreateElement;
