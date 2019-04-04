import React from 'react';
import cn from 'classnames';

import TextFieldContext from './Context';

function Label(props) {
  return (
    <TextFieldContext.Consumer>
      {({ cssClasses, id, isFocused, isDirty }) => (
        <label
          {...props}
          className={cn(cssClasses.LABEL, props.className, {
            [cssClasses.ACTIVE]: isFocused || isDirty
          })}
          htmlFor={id}>
          {props.children}
        </label>
      )}
    </TextFieldContext.Consumer>
  );
}

export default Label;
