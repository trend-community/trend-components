import React from 'react';
import cn from 'classnames';

import createComponent from '@trend/utils/createComponent'
import createUseHook from '@trend/utils/createUseHook';
import useAllRefs from '@trend/utils/hooks/useAllRefs';
import useAllCallbacks from '@trend/utils/hooks/useAllCallbacks';
import useCreateElement from '@trend/utils/hooks/useCreateElement';
import usePipe from '@trend/utils/hooks/usePipe';
import warning from '@trend/utils/warning';

import { useDisclosure, useDisclosureRef } from '@trend/disclosure';
import { useFocusTrap } from '@trend/focustrap/FocusTrap';
import Portal from '@trend/portal';
import useDisableHoverOutside from './internal/useDisableHoverOutside';
import useFocusOnShow from './internal/useFocusOnShow';
import useFocusOnHide from './internal/useFocusOnHide';
import useHideOnClickOutside from './internal/useHideOnClickOutside';
import useLockBodyScroll from './internal/useLockBodyScroll';
import useDialogProvider from './internal/useDialogProvider';
import useHideRootElement from './internal/useHideRootElement';
import useDialogState from './useDialogState';
import DialogMask from './DialogMask';
import { cssClasses } from './constants';

const optionProps = [
  'rootElement',
  'modal',
  'preventBodyScroll',
  'portal',
  'variants',
  'hasMask'
];

const useDialog = createUseHook({
  name: 'Dialog',
  compose: [useDisclosure, useFocusTrap],
  useState: useDialogState,
  optionProps,
  useOptions: ({
    classnameOptions = {
      dialog: cssClasses.dialog,
      dialogStacked: cssClasses.dialogStacked,
      dialogScroll: cssClasses.dialogScroll,
      dialogOpen: cssClasses.dialogOpen
    },
    modal = true,
    preventBodyScroll = true,
    escapeDeactivates = true,
    clickOutsideDeactivates = true,
    portal = modal,
    rootElement = undefined,
    visible = false,
    shouldTrap = modal,
    variants = '',
    hasMask = false,
    ...options
  }) => ({
    active: visible,
    classnameOptions,
    clickOutsideDeactivates,
    escapeDeactivates,
    preventBodyScroll,
    modal,
    portal,
    rootElement,
    shouldTrap,
    visible,
    variants,
    hasMask,
    ...options
  }),
  useProps: ({ classnameOptions, ...options }, {
    'aria-describedby': propsAriaDescribedby = undefined,
    'aria-labelledby': propsAriaLabelledby = undefined,
    className,
    ref: propsRef,
    wrap: propsWrap,
    ...props
   }) => {
    const dialogRef = React.useRef(null);
    const disclosureRef = useDisclosureRef(options);
    const { dialogs, wrap } = useDialogProvider(dialogRef, options);

    useLockBodyScroll(dialogRef, options);
    useHideOnClickOutside(dialogRef, disclosureRef, dialogs, options);
    useDisableHoverOutside(dialogRef, dialogs, options);
    useHideRootElement(options);

    if (!options.shouldTrap) {
      useFocusOnShow(dialogRef, dialogs, options);
      useFocusOnHide(dialogRef, disclosureRef, options);
    }

    const wrapChildren = React.useCallback(children => {
      const Mask = () => options.hasMask
        ? <DialogMask visible={options.visible} />
        : false;

      return options.portal
        ? <Portal>
            {wrap(children)}
            <Mask />
          </Portal>
        : wrap(children)
    }, [options.portal, options.visible, wrap]);

    return {
      'aria-labelledby': options.titleId || propsAriaLabelledby,
      'aria-describedby': options.bodyId || propsAriaDescribedby,
      'aria-modal': options.modal,
      className: cn(className, {
        [classnameOptions.dialogScroll]: options.variants.includes('scroll'),
        [classnameOptions.dialogStacked]: options.variants.includes('stacked'),
        [classnameOptions.dialog]: options.modal,
        [classnameOptions.dialogOpen]: options.modal && options.visible
      }),
      'data-dialog': true,
      ref: useAllRefs(dialogRef, propsRef),
      role: 'dialog',
      tabIndex: -1,
      wrap: usePipe(wrapChildren, propsWrap),
      ...props,
    }
  }
});

const Dialog = createComponent({
  as: 'div',
  useHook: useDialog,
  useCreateElement: (type, props, children) => {
    warning(
      !props['aria-label'] && !props['aria-labelledby'],
      'Dialog: Expect an `aria-label` or `aria-labelledby`, but detected none.'
    );

    return useCreateElement(type, props, children);
  }
});

export { useDialog };
export default Dialog;
