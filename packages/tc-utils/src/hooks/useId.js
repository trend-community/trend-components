import React from 'react';

import uId from '../internal/uId';

const Ctx = React.createContext(uId);

function useId(prefix) {
  const createId = React.useContext(Ctx);
  const [id] = React.useState(() => createId(prefix));

  return id;
}

export default useId;
