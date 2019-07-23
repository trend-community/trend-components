import React from 'react';

import uId from '../internal/uId';

function useId(prefix) {
  const [id, setId] = React.useState(null);

  React.useEffect(() => setId(uId(prefix)), []);

  return id;
}

export default useId;
