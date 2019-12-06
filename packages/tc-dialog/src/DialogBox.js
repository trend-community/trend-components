import React from 'react';
import cn from 'classnames';

import createComponent from '@trend/utils/createComponent'
import createUseHook from '@trend/utils/createUseHook';
import useApp from '@trend/utils/hooks/useApp';
import useClassnameOptions from '@trend/utils/hooks/useClassnameOptions';

import { cssClasses } from './constants';

const useDialogBox = createUseHook({
  name: 'DialogBox',
  compose: [useApp, useClassnameOptions],
  useOptions: ({
    classnameOptions = { dialogBox: cssClasses.dialogBox },
    ...options
  }) => ({ classnameOptions, ...options }),
  useProps: (options, { className, ...props }) => ({
    className: cn(options.classnameOptions.dialogBox, className),
    ...props
  })
});

const DialogBox = createComponent({
  as: 'div',
  useHook: useDialogBox
});

export { useDialogBox };
export default DialogBox;
