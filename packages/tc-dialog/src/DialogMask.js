import createComponent from '@trend/utils/createComponent'
import createUseHook from '@trend/utils/createUseHook';

import { useDisclosure } from '@trend/disclosure'
import useDialogState from './useDialogState';

const useDialogMask = createUseHook({
  name: 'DialogMask',
  compose: useDisclosure,
  useState: useDialogState,
  useProps: (options, props) => ({
    id: undefined,
    role: 'presentation',
    ...props
  })
});

const DialogMask = createComponent({
  as: 'div',
  useHook: useDialogMask
});

export { useDialogMask };
export default DialogMask;
