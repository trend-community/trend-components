import React from 'react';

import remove from '@trend/utils/internal/remove';
import useHideOnEscape from './useHideOnEscape';

const DialogContext = React.createContext({});

function useDialogProvider(dialogRef, options) {
  const ctx = React.useContext(DialogContext);
  const [dialogs, setDialogs] = React.useState([]);
  const addDialog = React.useCallback(ref => {
    if (ctx.addDialog) {
      ctx.addDialog(ref);
    }

    setDialogs(refs => [...refs, ref]);
  }, [ctx.addDialog]);
  const removeDialog = React.useCallback(ref => {
    if (ctx.removeDialog) {
      ctx.removeDialog(ref);
    }

    setDialogs(refs => remove(refs, [ref]));
  }, [ctx.removeDialog]);

  // Manage open dialogs for handling escape.
  const [openedDialogs, setOpenedDialogs] = React.useState([]);
  const addOpenedDialog = React.useCallback(ref => {
    if (ctx.addOpenedDialog) {
      ctx.addOpenedDialog(ref);
    }

    setOpenedDialogs(refs => [...refs, ref]);
  }, [ctx.addOpenedDialog]);
  const removeOpenedDialog = React.useCallback(ref => {
    if (ctx.removeOpenedDialog) {
      ctx.removeOpenedDialog(ref);
    }

    setOpenedDialogs(refs => remove(refs, [...ref]));
  }, [ctx.removeOpenedDialog]);

  // If it's a nested dialog, add it to ctx
  React.useEffect(() => {
    if (!ctx.addDialog) {
      return undefined;
    }

    ctx.addDialog(dialogRef);

    return () => {
      if (ctx.removeDialog) {
        ctx.removeDialog(dialogRef);
      }
    };
  }, [
    dialogRef,
    ctx.addDialog,
    ctx.removeDialog,
  ]);

  // Add open nested dialogs.
  // @todo Not a fan of the all the control flow statements.
  React.useEffect(() => {
    if (options.visible) {
      addOpenedDialog(dialogRef);
    }
    else {
      removeOpenedDialog(dialogRef);
    }

    return () => {
      removeOpenedDialog(openedDialogs);
    }
  }, [
    options.visible,
    ctx.addOpenedDialog,
    ctx.removeOpenedDialog
  ]);

  useHideOnEscape(openedDialogs, options);

  // Close all nested dialogs when parent dialog closes
  React.useEffect(() => {
    if (ctx.visible === false &&
      options.visible &&
      options.hide) {
      options.hide();
    }
  }, [
    ctx.visible,
    options.visible,
    options.hide
  ]);

  // Provider
  const providerValue = React.useMemo(() => ({
    visible: options.visible,
    addDialog,
    removeDialog,
    addOpenedDialog,
    removeOpenedDialog
  }), [
    options.visible,
    addDialog,
    removeDialog,
    addOpenedDialog,
    removeOpenedDialog
  ]);

  const wrap = React.useCallback(children => (
    <DialogContext.Provider value={providerValue}>
      {children}
    </DialogContext.Provider>), [providerValue]
  );

  return { dialogs, wrap };
}

export default useDialogProvider;
