import React from 'react';
import cn from 'classnames';

import createComponent from '@trend/utils/createComponent';
import createUseHook from '@trend/utils/createUseHook';
import useApp from '@trend/utils/hooks/useApp';
import useAllCallbacks from '@trend/utils/hooks/useAllCallbacks';
import useAllRefs from '@trend/utils/hooks/useAllRefs';
import useClassnameOptions from '@trend/utils/hooks/useClassnameOptions';
import useWindowScroll from '@trend/utils/hooks/useWindowScroll';

import { classNames } from './constants';

const defaultStyles = {
  backfaceVisibility: 'hidden',
  transform: 'translateY(0)',
  transition: 'transform 0.2s linear'
};

const useTopbar = createUseHook({
  name: 'Topbar',
  compose: [useApp, useClassnameOptions],
  optionProps: ['compact', 'fixed', 'fixedScroll', 'tall'],
  useOptions: ({
    classnameOptions = { ...classNames },
    compact = false,
    fixed = false,
    fixedScroll = false,
    tall = false,
    ...options
  }, props) => ({
    classnameOptions,
    compact,
    fixed,
    fixedScroll,
    tall,
    ...options
  }),
  useProps: ({
    classnameOptions: cnOptions, ...options }, props) => {
    const freshRef = React.useRef(null);
    const [style, setStyle] = React.useState({
      ...defaultStyles,
      ...(props.style || {})
    });
    const [height, setHeight] = React.useState(0);
    const [lastScrollTop, setLastScrollTop] = React.useState(0);
    const [isScrolling, setIsScrolling] = React.useState(false);
    const { x, y: scrollTop } = useWindowScroll();

    React.useEffect(() => {
      setHeight(freshRef.current.offsetHeight);
    }, [options.size]);

    React.useEffect(() => {
      if (options.fixed || options.fixedScroll) {
        setIsScrolling(scrollTop > 24);
      }

      if (options.fixedScroll) {
        const adjustedPos = scrollTop <= height ? scrollTop * -1 : height * -1;
        const realPos = scrollTop < lastScrollTop ? 0 : adjustedPos;

        // @todo: should call for raf be wrapped in a hook?
        window.requestAnimationFrame(() => {
          setStyle({
            ...style,
            transform: `translateY(${realPos}px)`,
          });
          setLastScrollTop(scrollTop);
        });
      }
    }, [scrollTop]);

    return {
      ...props,
      className: cn(cnOptions.ROOT, props.className, {
        [cnOptions.COMPACT]: options.compact,
        [cnOptions.FIXED]: options.fixed || options.fixedScroll,
        [cnOptions.FIXED_SCROLLING]: isScrolling && !options.fixedScroll,
        [cnOptions.TALL]: options.tall && !isScrolling
      }),
      ref: useAllRefs(freshRef, props.ref),
      style
    };
  }
});

const Topbar = createComponent({
  as: 'header',
  useHook: useTopbar
});

export { useTopbar };
export default Topbar;
