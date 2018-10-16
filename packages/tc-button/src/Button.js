import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const classNames = {
  BASE: 'tc-Button',
  ICON: 'tc-Button-icon',
  ACCENT: 'tc-Button--accent',
  COMPACT: 'tc-Button--compact',
  CTAB: 'tc-Button--ctab',
  FLAT: 'tc-Button--flat',
  GHOST: 'tc-Button--ghost'
};

const modifiers = {
  ACCENT: 'accent',
  CTAB: 'ctab',
  FLAT: 'flat',
  GHOST: 'ghost',
  COMPACT: 'compact'
};

class Button extends PureComponent {
  static propTypes = {
    accent: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func
    ]).isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    size: PropTypes.oneOf([modifiers.COMPACT]),
    variant: PropTypes.oneOf([modifiers.CTAB, modifiers.FLAT, modifiers.GHOST])
  }

  static defaultProps = {
    accent: false,
    type: 'button'
  }

  getButtonIconProps(props = {}) {
    return {
      ...props,
      className: cn(classNames.ICON, props.className),
      'aria-hidden': true
    };
  }

  api() {
    return {
      getButtonIconProps: this.getButtonIconProps
    };
  }

  render() {
    const {
      accent,
      children,
      className,
      size,
      type,
      variant,
      ...rest
    } = this.props;

    return <button
      {...rest}
      className={cn(
        classNames.BASE,
        className, {
          [classNames.ACCENT]: accent,
          [classNames.COMPACT]: size === modifiers.COMPACT,
          [classNames.CTAB]: variant === modifiers.CTAB,
          [classNames.FLAT]: variant === modifiers.FLAT,
          [classNames.GHOST]: variant === modifiers.GHOST,
        }
      )}
      type={type}>
      {typeof children === 'function'
        ? children(this.api())
        : children
      }
    </button>;
  }
}

export default Button;
