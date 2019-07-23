import React from 'react';

import isNil from '../internal/isNil';
import not from '../internal/not';
import AppContext from '../state/AppContext';

function useToken(token, defaultValue) {
  React.useDebugValue(token);
  const context = React.useContext(AppContext);

  return not(isNil)(context[token]) ? context[token] : defaultValue;
}

export default useToken;
