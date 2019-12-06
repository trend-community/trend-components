import cn from 'classnames';

import createComponent from '@trend/utils/createComponent'
import createUseHook from '@trend/utils/createUseHook';

// import useClassnameOptions from '@trend/utils/hooks/useClassnameOptions';
import useAllCallbacks from '@trend/utils/hooks/useAllCallbacks';
import { useDisclosure } from '@trend/disclosure';
import useDialogState from './useDialogState';

import { cssClasses } from './constants';

const useDialogMask = createUseHook({
  name: 'DialogMask',
  compose: useDisclosure,
  useState: useDialogState,
  useProps: (options, { className, ...props }) => ({
    className: cn(cssClasses.dialogMask, className, {
      [cssClasses.dialogOpen]: options.visible
    }),
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
