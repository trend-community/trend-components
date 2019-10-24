import React from 'react';

function useDisclosureRef({ disclosureId, visible }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (visible) {
      const selector = `[aria-controls~="${disclosureId}"]`;

      ref.current = document.querySelector(selector);
    }

  }, [disclosureId, visible]);

  return ref;
}

export default useDisclosureRef;
