import cn from 'classnames';

import createComponent from '@trend/utils/createComponent'
import createUseHook from '@trend/utils/createUseHook';
import useClassnameOptions from '@trend/utils/hooks/useClassnameOptions';
import { useButton } from '@trend/button';

import { cssClasses } from './constants';

const useDialogActionButton = createUseHook({
  name: 'DialogButton',
  compose: [useButton, useClassnameOptions],
  useOptions: ({
    classnameOptions = { dialogActionButton: cssClasses.dialogActionButton },
    ...options
  }) => ({ classnameOptions, ...options }),
  useProps: (options, { className, ...props }) => ({
    className: cn(options.classnameOptions.dialogActionButton, className),
    ...props
  })
});

const DialogActionButton = createComponent({
  as: 'button',
  useHook: useDialogActionButton
});

export { useDialogActionButton };
export default DialogActionButton;
