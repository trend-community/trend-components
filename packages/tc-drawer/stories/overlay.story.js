import React, { Component, Fragment } from 'react';

import { DrawerOverlay as Drawer } from '../src';

class Wrapper extends Component {
  state = {
    open: false
  }

  toggleDrawer = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  }

  onLinkClick = evt => {
    evt.preventDefault();
    this.toggleDrawer();
  }

  render() {
    const { children } = this.props;
    const { open } = this.state;

    return <Fragment>
      <Drawer open={open} onToggle={this.toggleDrawer}>
        { helpers => (
          <Fragment>
            <div {...helpers.getHdProps()}>
              <h1 {...helpers.getTitleProps()}>Title</h1>
              <h2 {...helpers.getSubtitleProps()}>SubTitle</h2>
            </div>
            <div {...helpers.getInnerProps({className: 'tc-phb'})}>
              <a className="tc-display-block"
                href="#"
                onClick={this.onLinkClick}>
                link 1
              </a>
              <a className="tc-display-block"
                href="#"
                onClick={this.onLinkClick}>
                link 2
              </a>
              <button className="tc-display-block"
                onClick={this.toggleDrawer}>
                link 3
              </button>
            </div>
          </Fragment>
        )}
      </Drawer>
      <div className="tc-layout-relative tc-size-full">
        <div className="tc-phb">
          <h1 className="tc-type-h3">Trend Components Drawer (Overlay)</h1>
          <p>Modal style drawer that slides out from the left side.  <a href="#" onClick={this.onLinkClick}>Try it out!</a>
          </p>
          <p>The drawer will trap focus when active and return focus to
            previously active item.  <a href="#" onClick={this.onLinkClick}>Click!</a>
          </p>
        </div>
      </div>
    </Fragment>;
  }
}

function Story() {
  return <Wrapper />;
}

Story.displayName = 'Overlay';

export default Story;
