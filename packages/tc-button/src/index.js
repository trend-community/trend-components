import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import createComponent from '@trend/utils/createComponent';
import createUseHook from '@trend/utils/createUseHook';
import useAllRefs from '@trend/utils/hooks/useAllRefs';
import not from '@trend/utils/internal/not';
import { useInteractive } from '@trend/interactive';
import { cssClasses } from './constants';

const modifier = modifier => modifier.replace(/^.*--/, '');

const propTypes = {
  accent: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  size: PropTypes.oneOf([modifier(cssClasses.COMPACT), undefined]),
  variant: PropTypes.oneOf([
    modifier(cssClasses.CTAB),
    modifier(cssClasses.FLAT),
    modifier(cssClasses.GHOST)
  ])
};

const useButton = createUseHook({
  name: 'Button',
  compose: useInteractive,
  keys: ['accent', 'variant', 'size'],
  useProps: ({ accent, size, variant, ...options }, { ref, ...htmlProps }) => {
    const freshRef = React.useRef(null);
    const [role, setRole] = React.useState(undefined);
    const [type, setType] = React.useState(undefined);

    React.useEffect(() => {
      const isButtonElement = () =>
        freshRef.current instanceof HTMLButtonElement;

      if (not(isButtonElement)()) {
        setRole('button');
      }

      if (isButtonElement()) {
        setType(htmlProps.type || 'button');
      }
    }, []);

    return {
      ref: useAllRefs(freshRef, ref),
      type,
      ...htmlProps,
      className: cn(
        cssClasses.BASE,
        htmlProps.className, {
          [cssClasses.ACCENT]: accent,
          [cssClasses.COMPACT]: size === modifier(cssClasses.COMPACT),
          [cssClasses.CTAB]: variant === modifier(cssClasses.CTAB),
          [cssClasses.FLAT]: variant === modifier(cssClasses.FLAT),
          [cssClasses.GHOST]: variant === modifier(cssClasses.GHOST),
        }
      ),
      role
    };
  }
});

const Button = createComponent({
  as: 'button',
  useHook: useButton
});

Button.propTypes = propTypes;

Button.getIconProps = (props = {}) => ({
  ...props,
  className: cn(cssClasses.ICON, props.className),
  'aria-hidden': true
});

export { useButton };
export default Button;
