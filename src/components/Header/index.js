import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node
};

function Header({ children, ...rest }) {
  return <header {...rest} className="tc-Topbar tc-Topbar--fixed">{children}</header>;
}

Header.propTypes = propTypes;
Header.displayName = 'Header';

export default Header;
