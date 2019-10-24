import React from 'react';

import createComponent from '@trend/utils/createComponent'
import createUseHook from '@trend/utils/createUseHook';
import useAllRefs from '@trend/utils/useAllRefs';
import useAllCallbacks from '@trend/utils/hooks/useAllCallbacks';
import usePipe from '@trend/utils/hooks/usePipe';

import { useDisclosure, useDisclosureRef } from '@trend/disclosure';
import Portal from '@trend/portal';
import useLockBodyScroll from './internal/useLockBodyScroll';
import useNestedDialogs from './internal/useNestedDialogs';
import useDialogState from './useDialogState';

const optionProps: [
  'modal',
  'hideOnEsc',
  'hideOnClickOutside',
  'preventBodyScroll',
  'initialFocusRef',
  'finalFocusRef',
  'autoFocusOnShow',
  'autoFocusOnHide',
  'portal',
  'orphan'
];

const useDialog = createUseHook({
  name: 'Dialog',
  compose: useDisclosure,
  useState: useDialogState,
  optionProps,
  useOptions: ({
    modal = true,
    hideOnEsc = true,
    hideOnClickOutside = true,
    preventBodyScroll = true,
    autoFocusOnShow = true,
    autoFocusOnHide = true,
    portal = modal,
    orphan,
    ...options
  }) => ({
    modal,
    hideOnEsc,
    hideOnClickOutside,
    preventBodyScroll,
    autoFocusOnShow,
    autoFocusOnHide,
    portal,
    orphan: modal && orphan,
    ...options
  }),
  useProps: (options, props) => {
    const dialogRef = React.useRef(null);
    const disclosure = useDisclosureRef(options);
    const { dialogs, wrap } = useNestedDialogs(dialogRef, options);

    useLockBodyScroll(dialogRef, options);

    const onKeyDown = React.useCallback((event) => {
      if (event.key === 'Escape' && options.hideOnEsc) {
        // if (!options.hide) {
        //   warning(true, "Dialog", "`hideOnEsc` prop is truthy, but `hide` prop wasn't provided.", "See https://reakit.io/docs/dialog");
        //   return;
        // }

        event.stopPropagation();
        options.hide();
      }
    }, [options.hideOnEsc, options.hide]);
    const wrapChildren = React.useCallback(children => (
      options.portal
        ? <Portal>{wrap(children)}</Portal>
        : wrap(children);
    ), [options.portal, wrap]);

    return {
      ref: useAllRefs(dialogRef, props.Ref),
      role: 'dialog',
      tabIndex: -1,
      'aria-modal': options.modal,
      'data-dialog': true,
      onKeyDown: useAllCallbacks(onKeyDown, props.OnKeyDown),
      wrap: usePipe(wrapChildren, props.Wrap)
      ...props
    }
  }
});

const Dialog = createComponent({
  as: 'div',
  useHook: useDialog
});

export default Dialog;
