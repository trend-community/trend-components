import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import TextFieldContext from './Context';
import { validations } from './validator';

const validators = Object.keys(validations);

// NOTE: This should be moved to a new package for handling utilities.
function callAll(...fns) {
  return (event, ...args) => fns.some(fn => {
    fn && fn(event, ...args);

    return event.defaultPrevented;
  });
}

class Input extends React.Component {
  static defaultProps = {
    onBlur: () => {},
    onChange: () => {},
    onFocus: () => {},
    type: 'text'
  }

  elem = React.createRef()

  componentDidMount() {
    if (this.props.defaultValue || this.props.value) {
      this.elem.current.dispatchEvent(new Event('blur'));
    }
  }

  hasValidations(props) {
    return validators.some(v => props.hasOwnProperty(v))
  }

  isTextarea(variant) {
    return variant === 'textarea';
  }

  getType(variant) {
    if (this.isTextarea(variant)) {
      return undefined;
    }

    return this.props.type;
  }

  render() {
    const { props } = this;

    return (
      <TextFieldContext.Consumer>
        {textfield => (
          React.createElement(
            this.isTextarea(textfield.variant) ? 'textarea' : 'input',
            {
              ...props,
              'aria-controls':
                textfield.hasHelperText() && this.hasValidations(props)
                  ? textfield.helperId
                  : undefined,
              'aria-invalid': textfield.isInvalid,
              'aria-describedby': textfield.describeInput(),
              className: cn(textfield.cssClasses.INPUT, props.className),
              disabled: textfield.isDisabled,
              id: textfield.id,
              onBlur: callAll(props.onBlur, textfield.onBlur),
              onChange: callAll(props.onChange, textfield.onChange),
              onFocus: callAll(props.onFocus, textfield.onFocus),
              ref: this.elem,
              type: this.getType(textfield.variant)
            }
          )
        )}
      </TextFieldContext.Consumer>
    );
  }
}

export default Input;
