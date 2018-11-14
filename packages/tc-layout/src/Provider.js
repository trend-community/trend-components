import React, { Component } from 'react';

import LayoutContext from './Context';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasActiveDrawer: false,
      hideDrawer: this.hideDrawer,
      showDrawer: this.showDrawer,
      toggleDrawer: this.toggleDrawer
    };
  }

  hideDrawer = () => {
    this.setState({ hasActiveDrawer: false });
  }

  showDrawer = () => {
    this.setState({ hasActiveDrawer: true });
  }

  toggleDrawer = () => {
    this.setState(({ hasActiveDrawer }) => ({
      hasActiveDrawer: !hasActiveDrawer
    }));
  }

  render() {
    return (
      <LayoutContext.Provider value={this.state}>
        {this.props.children}
      </LayoutContext.Provider>
    );
  }
}

export default Layout;
