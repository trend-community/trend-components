import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import FocusTrap from '@trend/focustrap';

import { cssClasses } from './constants';
import Drawer from './Drawer';

const ESCAPE_KEYCODE = 27;
const maskStyles = {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: '1'
};

function isEscapeEvent(evt) {
  return evt.key === 'Escape' || evt.key === 'Esc' || evt.keyCode === 27;
}

class Overlay extends React.Component {
  static propTypes = {
    hasMask: PropTypes.bool,
    onToggle: PropTypes.func,
    open: PropTypes.bool
  }

  static defaultProps = {
    open: false,
    hasMask: true,
    onToggle: () => {}
  }

  focustrap = React.createRef()

  componentDidMount() {
   if (this.props.open) {
      this._addListeners();
    }
  }

  componentDidUpdate() {
    if (this.props.open) {
      this._addListeners();
    }

    if (!this.props.open) {
      this._removeListeners();
    }
  }

  componentWillUnmount() {
    this._removeListeners();
  }

  api = () => {
    const getters = {
      ...Drawer.api(),
      refs: {
        focusNode: this.focusNode
      }
    };
    delete getters.getRootProps;
    return getters;
  }

  render() {
    const {
      children,
      className,
      hasMask,
      open,
      ...rest } = this.props;
    const classes =  cn(
      cssClasses.ROOT,
      cssClasses.OVERLAY,
      className, {
        [cssClasses.OPEN]: open
      });

    return <Fragment>
      <FocusTrap
        className={classes}
        aria-hidden={!open}
        active={open}
        tag="aside"
        focusTrapOptions={{
          returnFocusOnDeactivate: true,
          clickOutsideDeactivates: true
        }}
        ref={this.focustrap}>
        {typeof children === 'function'
          ? children(this.api())
          : children
        }
      </FocusTrap>

      {open && hasMask && <div className="tc-layout-fixed-viewport"
        onClick={this._onToggle}
        style={maskStyles} />}
    </Fragment>;
  }

  _addListeners() {
    document.addEventListener('keydown', this._onDocumentClick);
  }

  _removeListeners() {
    document.removeEventListener('keydown', this._onDocumentClick);
  }

  _onDocumentClick = evt => {
    if (isEscapeEvent(evt)) {
      this._onToggle(evt);
    }
  }

  _onToggle = evt => {
    evt.stopPropagation();
    this.props.onToggle();
  }
}

export default Overlay;
