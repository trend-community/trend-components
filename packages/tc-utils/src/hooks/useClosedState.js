import React from 'react';

function useClosedState(initialState) {
  const [closed] = React.useState(initialState);

  return closed;
}

export default useClosedState;
