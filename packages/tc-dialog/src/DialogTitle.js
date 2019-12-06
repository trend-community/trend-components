import React from 'react';
import cn from 'classnames';

import createComponent from '@trend/utils/createComponent'
import createUseHook from '@trend/utils/createUseHook';
import useApp from '@trend/utils/hooks/useApp';
import useClassnameOptions from '@trend/utils/hooks/useClassnameOptions';
import useDialogState from './useDialogState';

import { cssClasses } from './constants';

const useDialogTitle = createUseHook({
  name: 'DialogTitle',
  compose: [useApp, useClassnameOptions],
  useState: useDialogState,
  useOptions: ({
    classnameOptions = { dialogTitle: cssClasses.dialogTitle },
    titleId = undefined,
    ...options
  }) => ({ classnameOptions, titleId, ...options }),
  useProps: (options, { className, id, ...props }) => ({
    className: cn(options.classnameOptions.dialogTitle, className),
    id: options.titleId || id,
    ...props
  })
});

const DialogTitle = createComponent({
  as: 'h2',
  useHook: useDialogTitle
});

export { useDialogTitle };
export default DialogTitle;
