import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';

class Code extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const { children, className } = this.props;

    return <pre className={className}>{children}</pre>
  }
}

export default Code;
