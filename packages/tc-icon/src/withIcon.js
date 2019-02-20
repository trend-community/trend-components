import React from 'react';
import PropTypes from 'prop-types';

const defaultStyle = {
  display: 'inline-block',
  fill: 'currentColor',
  verticalAlign: 'middle',
  height: 'auto',
  width: 'inherit'
};

function withIcon(WrappedComponent) {
  function WithIcon({ size, unit, style, ...rest }) {
    const styles = {
      ...defaultStyle,
      ...style
    };

    return <WrappedComponent
      {...rest}
      height={`${parseFloat(size)}${unit}`}
      width={`${parseFloat(size)}${unit}`}
      style={styles} />;
  }

  WithIcon.propTypes = {
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    unit: PropTypes.oneOf(['em', 'rem']),
    style: PropTypes.object
  };
  WithIcon.defaultProps = {
    size: 1,
    unit: 'em'
  };
  WithIcon.displayName = `WithIcon(${getDisplayName(WrappedComponent)})`;

  return WithIcon;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withIcon;
