import React from 'react';
import cn from 'classnames';

import createComponent from '@trend/utils/createComponent'
import createUseHook from '@trend/utils/createUseHook';
import useApp from '@trend/utils/hooks/useApp';
import useClassnameOptions from '@trend/utils/hooks/useClassnameOptions';

import { cssClasses } from './constants';

const useDialogActions = createUseHook({
  name: 'DialogActions',
  compose: [useApp, useClassnameOptions],
  useOptions: ({
    classnameOptions = { dialogActions: cssClasses.dialogActions },
    ...options
  }) => ({ classnameOptions, ...options }),
  useProps: (options, { className, ...props }) => ({
    className: cn(options.classnameOptions.dialogActions, className),
    ...props
  })
});

const DialogActions = createComponent({
  as: 'div',
  useHook: useDialogActions
});

export { useDialogActions };
export default DialogActions;
