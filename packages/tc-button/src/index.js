import React from 'react';
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

const modifier = modifier => modifier.replace(/^.*--/, '');

function Button(props) {
  const {
    accent,
    className,
    size,
    type,
    variant,
    ...rest
  } = props;

  return <button
    {...rest}
    className={cn(
      classNames.BASE,
      className, {
        [classNames.ACCENT]: accent,
        [classNames.COMPACT]: size === modifier(classNames.COMPACT),
        [classNames.CTAB]: variant === modifier(classNames.CTAB),
        [classNames.FLAT]: variant === modifier(classNames.FLAT),
        [classNames.GHOST]: variant === modifier(classNames.GHOST),
      }
    )}
    type={type} />;
}

Button.propTypes = {
  accent: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  size: PropTypes.oneOf([modifier(classNames.COMPACT)]),
  variant: PropTypes.oneOf([
    modifier(classNames.CTAB),
    modifier(classNames.FLAT),
    modifier(classNames.GHOST)
  ])
};
Button.defaultProps = {
  accent: false,
  type: 'button'
};
Button.getIconProps = (props = {}) => ({
  ...props,
  className: cn(classNames.ICON, props.className),
  'aria-hidden': true
});

export default Button;
