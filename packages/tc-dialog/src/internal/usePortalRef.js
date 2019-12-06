import React from 'react';

import Portal from '@trend/portal';

function usePortalRef(dialogRef, options) {
  const portalRef = React.useRef(null);

  React.useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog || !options.visible) {
      return;
    }

    portalRef.current = dialog.closest(`.${Portal.__defaultClassName__}`);
  }, [dialogRef, options.visible]);

  return portalRef;
}

export default usePortalRef;
