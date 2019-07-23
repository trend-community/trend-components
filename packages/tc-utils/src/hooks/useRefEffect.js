import React from 'react';

function useRefEffect(value) {
  const ref = React.useRef(value);

  React.useEffect(() => {
    ref.current = value;
  });

  return ref;
}

export default useRefEffect;
