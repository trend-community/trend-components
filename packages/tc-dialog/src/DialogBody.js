import React from 'react';
import cn from 'classnames';

import createComponent from '@trend/utils/createComponent'
import createUseHook from '@trend/utils/createUseHook';
import useApp from '@trend/utils/hooks/useApp';
import useClassnameOptions from '@trend/utils/hooks/useClassnameOptions';
import useDialogState from './useDialogState';

import { cssClasses } from './constants';

const useDialogBody = createUseHook({
  name: 'DialogBody',
  compose: [useApp, useClassnameOptions],
  useState: useDialogState,
  useOptions: ({
    bodyId = undefined,
    classnameOptions = { dialogBody: cssClasses.dialogBody },
    ...options
  }) => ({ bodyId, classnameOptions, ...options }),
  useProps: (options, { className, id, ...props }) => ({
    className: cn(options.classnameOptions.dialogBody, className),
    id: options.bodyId || id,
    ...props
  })
});

const DialogBody = createComponent({
  as: 'div',
  useHook: useDialogBody
});

export { useDialogBody };
export default DialogBody;
