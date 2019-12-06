/**
 * Focus a specific ref when dialog is hidden.
 */

import useUpdateEffect from '@trend/utils/hooks/useUpdateEffect';
import isFunction from '@trend/utils/internal/isFunction';
import not from '@trend/utils/internal/not';
import warning from '@trend/utils/warning';
import { isTabbable } from '@trend/utils/tabbable';

// Test to see if a hide was triggered by a click or a tabbed element outside
// the dialog component.
function wasHideTriggeredOutsideDialog(dialogNode) {
  return document.activeElement &&
    dialogNode &&
    !dialogNode.contains(document.activeElement) &&
    (isTabbable(document.activeElement) ||
    document.activeElement.dataset.dialog === 'true');
}

function useFocusOnHide(dialogRef, disclosureRef, options) {
  const setReturnFocus = options.setReturnFocus || disclosureRef;

  useUpdateEffect(() => {
    if (not(Boolean)(!options.visible)) {
      return;
    }

    const dialog = dialogRef.current;

    if (wasHideTriggeredOutsideDialog(dialog)) {
      return;
    }

    const returnFocus = isFunction(setReturnFocus)
      ? setReturnFocus()
      : setReturnFocus;

    returnFocus && returnFocus.current
      ? returnFocus.current.focus()
      : returnFocus.focus();

    warning(
      !returnFocus,
      'Dialog can\'t return focus after closing dialog. Either render a disclosure component or provide a `setReturnFocus` prop.'
    );
  }, [dialogRef, setReturnFocus, options.visible]);
}

export default useFocusOnHide;
