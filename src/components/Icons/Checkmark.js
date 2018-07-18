import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string
};

function Checkmark({ className }) {
  return <svg className={className} viewBox="0 0 1024 1024">
    <title>checkmark</title>
    <path className="path"
      d="M864 128l-480 480-224-224-160 160 384 384 640-640z" />
  </svg>;
}

Checkmark.displayName = 'Checkmark';
Checkmark.propTypes = propTypes;

export default Checkmark;
