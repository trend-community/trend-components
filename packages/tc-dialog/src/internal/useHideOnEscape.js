import React from 'react';

import isEscapeEvent from '@trend/utils/isEscapeEvent';
import warning from '@trend/utils/warning';

function useHideOnEscape(openedDialogs, options) {
  React.useEffect(() => {
    const handler = event => {
      if (isEscapeEvent(event) && options.escapeDeactivates) {
        if (!options.hide) {
            warning(
              true,
              '`escapeDeactivates` prop is truthy, but `hide` prop wasn\'t provided.'
            );

          return;
        }

        const last = openedDialogs[openedDialogs.length - 1];

        if (options.disclosureId ===
          (last && last.current && last.current.id)) {
          options.hide();
        }
      }
    };

    document.addEventListener('keydown', handler, true);

    return () => {
      document.removeEventListener('keydown', handler, true);
    }
  }, [
    options.disclosureId,
    options.hide,
    options.escapeDeactivates,
    openedDialogs
  ]);
}

export default useHideOnEscape;
