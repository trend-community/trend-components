import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const classNames = {
  BASE: 'tc-Button',
  ICON: 'tc-Button-icon'
};
const MODIFIERS = ['accent', 'ctab', 'flat', 'ghost', 'compact'];

function isModifier(modifier) {
  return MODIFIERS.indexOf(modifier) !== -1;
}

function formatModifier(modifier) {
  return `${classNames.BASE}--${modifier}`;
}

function buildModifiers(modifiers) {
  const mods = Array.isArray(modifiers) ? modifiers : modifiers.split(' ');

  return mods
    .filter(isModifier)
    .map(formatModifier)
    .join(' ');
}

class Button extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func
    ]).isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    modifiers: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ]),
    type: PropTypes.oneOf(['button', 'submit', 'reset'])
  }

  static defaultProps = {
    modifiers: '',
    type: 'button'
  }

  getButtonIconProps(props = {}) {
    return {
      ...props,
      className: cn(classNames.ICON, props.className),
      'aria-hidden': true
    };
  }

  getButtonHelpers() {
    return {
      getButtonIconProps: this.getButtonIconProps
    };
  }

  render() {
    return this._createComponent(this.props);
  }

  _createComponent(props) {
    const {
      children,
      className,
      modifiers,
      type,
      ...rest
    } = props;

    return <button
      {...rest}
      className={cn(classNames.BASE, buildModifiers(modifiers), className)}
      type={type}>
      {typeof children === 'function'
        ? children(this.getButtonHelpers())
        : children
      }
    </button>;
  }
}

export default Button;
