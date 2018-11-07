import React from 'react';
import PropTypes from 'prop-types';

const defaultStyle = {
  display: 'inline-block',
  fill: 'currentColor',
  verticalAlign: 'middle'
};

function withIcon(Component) {
  function WithIcon({ size, unit, style, ...rest }) {
    const styles = {
      ...defaultStyle,
      ...style
    };

    return <Component
      {...rest}
      height={`${parseInt(size, 10)}${unit}`}
      width={`${parseInt(size, 10)}${unit}`}
      style={styles} />;
  }

  WithIcon.propTypes = {
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    unit: PropTypes.oneOf(['em', 'rem']),
    style: PropTypes.object
  };
  WithIcon.defaultProps = {
    size: 1,
    unit: 'rem'
  };
  WithIcon.displayName = `WithIcon(${getDisplayName(Component)})`;

  return WithIcon;
}

function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
}

export default withIcon;
