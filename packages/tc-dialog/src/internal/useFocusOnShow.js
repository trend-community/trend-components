/**
 * Set the focus to the first tabbable element or to the initialFocus options
 * prop.
 */

import useUpdateEffect from '@trend/utils/hooks/useUpdateEffect';
import warning from '@trend/utils/warning';
import isFunction from '@trend/utils/internal/isFunction';
import { getFirstTabbableIn } from '@trend/utils/tabbable';

function useFocusOnShow(dialogRef, nestedDialogs, options) {
  const initialFocus = options.initialFocus;
  const shouldFocus = options.visible;

  useUpdateEffect(() => {
    const dialog = dialogRef.current;

    warning(Boolean(shouldFocus && !dialog), 'Dialog can\'t set initial focus on dialog because `ref` wasn\'t passed to component.');

    // If they're nested open dialogs, let them handle focus.
    if (!shouldFocus || !dialog || nestedDialogs
      .find(child => Boolean(child.current && !child.current.hidden))) {
      return;
    }

    const initialFocusEl = isFunction(initialFocus)
      ? initialFocus()
      : initialFocus;

    if (initialFocusEl) {
      const focusEl = initialFocusEl.current || initialFocusEl;

      focusEl.focus({ preventScroll: true });
    }
    else {
      const tabbable = getFirstTabbableIn(dialog, true);
      const focusEl = tabbable || dialog;

      focusEl.focus({ preventScroll: true });

      warning(
        !tabbable && (dialog.tabIndex === undefined || dialog.tabIndex < 0),
        'It\'s recommended to have at least one tabbable element inside dialog. The dialog element has been automatically focused.  If this is the intended behavior, pass `tabIndex={0}` to the dialog element to disable this warning.'
      );
    }
  }, [dialogRef, initialFocus, shouldFocus, nestedDialogs]);
}

export default useFocusOnShow;
