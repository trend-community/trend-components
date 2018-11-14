import React from 'react';

const Context = React.createContext({
  hasActiveDrawer: false,
  hideDrawer: () => {},
  showDrawer: () => {},
  toggleDrawer: () => {}
});

export default Context;
