import useEventListenerOutside from './useEventListenerOutside';

function useHideOnClickOutside(
  dialogRef, disclosureRef, nestedDialogs, options) {
  useEventListenerOutside(
    dialogRef,
    disclosureRef,
    nestedDialogs,
    'click',
    options.hide,
    options.visible && options.clickOutsideDeactivates
  );

  useEventListenerOutside(
    dialogRef,
    disclosureRef,
    nestedDialogs,
    'focus',
    options.hide,
    options.visible && options.clickOutsideDeactivates
  );
}

export default useHideOnClickOutside;
