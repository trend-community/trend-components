import useEventListenerOutside from "./useEventListenerOutside";

function useDisableHoverOutside(portalRef, nestedDialogs, options) {
  useEventListenerOutside(
    portalRef,
    { current: null },
    nestedDialogs,
    'mouseover',
    event => {
      event.stopPropagation();
      event.preventDefault();
  }, options.visible && options.modal);

  useEventListenerOutside(
    portalRef,
    { current: null },
    nestedDialogs,
    'mouseout',
    event => {
      event.stopPropagation();
      event.preventDefault();
  }, options.visible && options.modal);
}

export default useDisableHoverOutside;
