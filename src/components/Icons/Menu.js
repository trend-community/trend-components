import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string
};

function Menu({ className, ...rest }) {
  return <svg
    className={className} {...rest}
    viewBox="0 0 20 14"
    style={{ fill: "currentColor", height: "auto", width: "inherit" }}>
    <title>Menu</title>
    <path className="path"
      d="M18,21H38v2H18V21Zm0,6H38v2H18V27Zm0,6H38v2H18V33Z"
      transform="translate(-18 -21)" />
  </svg>;
}

Menu.displayName = 'Menu';
Menu.propTypes = propTypes;

export default Menu;
