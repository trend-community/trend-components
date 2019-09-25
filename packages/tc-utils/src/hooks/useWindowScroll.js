import React from 'react';

const useWindowScroll = () => {
  const isClient = typeof window === 'object';
  const frame = React.useRef(0);
  const [state, setState] = React.useState({
    x: isClient ? window.pageXOffset : 0,
    y: isClient ? window.pageYOffset : 0,
  });

  React.useEffect(() => {
    const handler = () => {
      cancelAnimationFrame(frame.current);

      frame.current = requestAnimationFrame(() => {
        setState({
          x: window.pageXOffset,
          y: window.pageYOffset,
        });
      });
    };

    window.addEventListener('scroll', handler, {
      capture: false,
      passive: true,
    });

    return () => {
      cancelAnimationFrame(frame.current);
      window.removeEventListener('scroll', handler);
    };
  }, []);

  return state;
};

export default useWindowScroll;
