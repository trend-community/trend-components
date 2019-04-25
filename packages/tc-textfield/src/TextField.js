import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import uniqueId from 'lodash/uniqueId';

import TextFieldContext from './Context';
import Input from './Input';
import Label from './Label';
import { cssClasses } from './constants';
import validator from './validator';

const getModifier = modifier => modifier.replace(/^.*--/, '');
const isRim = variant => variant === getModifier(cssClasses.RIM);
const isTextarea = variant => variant === getModifier(cssClasses.TEXTAREA);

class TextField extends React.Component {
  static propTypes = {
    BeginningIcon: PropTypes.func,
    cssClasses: PropTypes.shape({
      ROOT: PropTypes.string,
      BEGINNING_ICON: PropTypes.string,
      ENDING_ICON: PropTypes.string,
      RIM: PropTypes.string,
      STRETCH: PropTypes.string,
      TEXTAREA: PropTypes.string,
      HELPER: PropTypes.string,
      ICON: PropTypes.string,
      INPUT: PropTypes.string,
      STRETCH: ProptTypes.string,
      LABEL: PropTypes.string,
      ACTIVE: PropTypes.string,
      DISABLED: PropTypes.string,
      FOCUSED: PropTypes.string,
    }),
    disabled: PropTypes.bool,
    EndingIcon: PropTypes.func,
    helperText: PropTypes.string,
    id: PropTypes.string,
    stretch: PropTypes.bool,
    validators: PropTypes.array,
    variant: PropTypes.oneOf([
      getModifier(cssClasses.RIM),
      getModifier(cssClasses.TEXTAREA)
    ])
  }

  static defaultProps = {
    cssClasses,
    disabled: false,
    id: uniqueId('tc-textfield-')
  }

  // Add compound components.
  static Input = Input
  static Label = Label

  static getDerivedStateFromProps(props, state) {
    if (props.disabled !== state.isDisabled) {
      return {
        isDisabled: props.disabled
      }
    }

    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      cssClasses: props.cssClasses,
      describeInput: this.describeInput,
      hasHelperText: this.hasHelperText,
      helperId: `${props.id}-helper-text`,
      id: props.id,
      isDirty: false,
      isDisabled: props.disabled,
      isFocused: false,
      isInvalid: false,
      validationMessage: null,
      getIconProps: this.getIconProps,
      onBlur: this._blur,
      onChange: this._change,
      onFocus: this._toggleFocus,
      value: '',
      variant: props.variant
    };
  }

  _blur = evt => {
    evt.persist();

    const errors = validator(evt.target, this.props.validators);

    this.setState(prev => ({
      isDirty: !!this.state.value || evt.target.value,
      isFocused: false,
      isInvalid: !!errors.length,
      validationMessage: errors.length && errors[0].message
    }));
  }

  _change = evt => {
    const errors = validator(evt.target, this.props.validators);

    this.setState({
      value: evt.target.value,
      isInvalid: !!errors.length,
      validationMessage: errors.length && errors[0].message
    });
  }

  _toggleFocus = evt => {
    this.setState(prev => ({ isFocused: !prev.isFocused }));
  }

  describeInput = () => {
    return this.hasHelperText() || !!this.props.validators
      ? this.state.helperId
      : undefined;
  }

  getIconProps = () => ({
    className: this.state.cssClasses.ICON,
    size: 1.25
  })

  hasHelperText = () => {
    return this.props.helperText || this.state.validationMessage;
  }

  render() {
    const {
      BeginningIcon,
      className,
      EndingIcon,
      helperText,
      stretch,
      variant
    } = this.props;
    const {
      cssClasses,
      helperId,
      id,
      isDirty,
      isDisabled,
      isFocused,
      isInvalid,
      validationMessage
    } = this.state;

    return (
      <TextFieldContext.Provider value={this.state}>
        <div className={cn(cssClasses.ROOT, className, {
          [cssClasses.BEGINNING_ICON]: !!BeginningIcon,
          [cssClasses.ENDING_ICON]: !!EndingIcon,
          [cssClasses.RIM]: isRim(variant),
          [cssClasses.TEXTAREA]: isTextarea(variant),
          [cssClasses.STRETCH]: stretch,
          [cssClasses.DISABLED]: isDisabled,
          [cssClasses.FOCUSED]: isFocused,
          [cssClasses.INVALID]: isInvalid
        })}>
          {this.props.children}
          {BeginningIcon && <BeginningIcon {...this.getIconProps()} />}
          {EndingIcon && <EndingIcon {...this.getIconProps()} />}
        </div>
        {this.hasHelperText()
          ? <div className={cssClasses.HELPER} id={helperId}>
            {
              !isInvalid || (isInvalid && !validationMessage)
                ? <span>{helperText}</span>
                : isInvalid && validationMessage ? validationMessage : false
            }
          </div>
          : false
        }
      </TextFieldContext.Provider>
    );
  }
}

export default TextField;
