import createComponent from '@trend/utils/createComponent'
import createUseHook from '@trend/utils/createUseHook';

import { useDisclosureButton } from '@trend/disclosure';
import useDialogState from './useDialogState';

const useDialogButton = createUseHook({
  name: 'DialogButton',
  compose: useDisclosureButton,
  useState: useDialogState,
  useProps: (options, props) => ({
    'aria-haspopup': 'dialog',
    ...props
  })
});

const DialogButton = createComponent({
  as: 'button',
  useHook: useDialogButton
});

export { useDialogButton };
export default DialogButton;
