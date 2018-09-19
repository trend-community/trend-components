import React from 'react';
import PropTypes from 'prop-types';

import { Menu as MenuIcon } from 'components/Icons';
import Topbar from 'packages/trend-react-components/Topbar';

const propTypes = {
  children: PropTypes.node
};

function Header({ children }) {
  return <Topbar fixed={true}>
    { helpers =>
      <header {...helpers.getElementProps()}>
        <div {...helpers.getInnerProps()}>
          <div {...helpers.getSectionProps({ position: 'start' })}>
            <button {...helpers.getIconProps({ type: 'button' })}>
              <MenuIcon />
            </button>
            <h1 {...helpers.getTitleProps()}>TREND Components</h1>
          </div>
          {children}
        </div>
      </header>
    }
  </Topbar>;
}

Header.propTypes = propTypes;
Header.displayName = 'Header';

export default Header;
