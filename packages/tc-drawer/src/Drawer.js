import React, { Component } from 'react';
import cn from 'classnames';

import { cssClasses } from './constants';

function classNameGetter(defaultProps = {}) {
  return (props = {}) => ({
    ...props,
    className: cn(defaultProps.className, props.className)
  });
}

class Drawer extends Component {
  static api() {
    return {
      getRootProps: classNameGetter({ className: cssClasses.ROOT }),
      getHdProps: classNameGetter({ className: cssClasses.HD }),
      getTitleProps: classNameGetter({ className: cssClasses.TITLE }),
      getSubtitleProps: classNameGetter({ className: cssClasses.SUBTITLE }),
      getInnerProps: classNameGetter({ className: cssClasses.INNER }),
    };
  }

  render() {
    const { children, ...rest } = this.props;

    return typeof children === 'function'
      ? children(Drawer.api())
      : children || null;
  }
}

export default Drawer;
