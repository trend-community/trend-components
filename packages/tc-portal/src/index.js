import React from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';

import isNil from '@trend/utils/internal/isNil';
import not from '@trend/utils/internal/not';

const isNotUndefined = not(isNil);

const PortalCtx = React.createContext(
  isNotUndefined(typeof document) ? document.body : null
);

export default function Portal({ children, className }) {
  const ctx = React.useContext(PortalCtx);
  const [container] = React.useState(() => {
    let container = null;

    if (isNotUndefined(typeof document)) {
      const portal = document.createElement('div');
      portal.className = cn('tc-Portal', className);

      container = portal;
    }

    return container;
  });

  React.useEffect(() => {
    if (!container || !ctx) {
      return undefined;
    }

    ctx.appendChild(container);

    return () => {
      ctx.removeChild(container);
    }
  }, [container, ctx]);

  return container
    ? <PortalCtx.Provider value={container}>
        {ReactDOM.createPortal(children, container)}
      </PortalCtx.Provider>
    : null;
};
