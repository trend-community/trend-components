import React from 'react';

import AppContext from './AppContext';

function AppProvider({ children, app }) {
  return <AppContext.Provider value={app}>{children}</AppContext.Provider>;
}

export default AppProvider;
