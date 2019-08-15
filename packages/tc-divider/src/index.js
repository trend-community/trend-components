import cn from 'classnames';
import PropTypes from 'prop-types';

import {
  checkForVariants,
  createComponent,
  createUseHook,
  getVariantName,
  useApp
} from '@trend/utils';
import { cssClasses } from './constants';

const propTypes = {
  orientation: PropTypes.oneOf(['horizontal', 'vertical', undefined]),
  variant: PropTypes.oneOf([getVariantName(cssClasses.indent)])
};

const useDivider = createUseHook({
  name: 'Divider',
  compose: useApp,
  optionProps: ['orientation', 'variant'],
  useOptions: ({ orientation = 'horizontal', variant = '', ...options }) => ({
    orientation,
    variant,
    ...options
  }),
  useProps: ({ variant: variants, ...options }, { className, ...props }) => {
    const { root, ...classVariants } = cssClasses;

    return {
      className: cn(
        root,
        className,
        checkForVariants({ variants, ...classVariants })
      ),
      role: 'separator',
      'aria-orientation': options.orientation || undefined,
      ...props
    };
  }
});

const Divider = createComponent({
  as: 'hr',
  useHook: useDivider
});

Divider.propTypes = propTypes;

export { useDivider };
export default Divider;
