import React from 'react';

import remove from '@trend/utils/internal/remove';

const DialogContext = React.createContext({});

function useNestedDialogs(dialogRef, options) {
  const context = React.useContext(DialogContext);
  const [dialogs, setDialogs] = React.useState([]);
  const addDialog = React.useCallback(ref => {
    if (context.addDialog) {
      context.addDialog(ref);
    }

    setDialogs(refs => [...refs, ref]);

  }, [context.addDialog]);
  const removeDialog = React.useCallback(ref => {
    if (context.removeDialog) {
      context.removeDialog(ref);
    }

    setDialogs(refs => removeItemFromArray(refs, ref));
  }, [context.removeDialog]);

  // If it's a nested dialog, add it to context
  React.useEffect(() => {
    if (!context.addDialog || options.orphan) {
      return undefined;
    }

    context.addDialog(dialogRef);

    return () => {
      if (context.removeDialog) {
        context.removeDialog(dialogRef);
      }
    };
  }, [
    dialogRef,
    context.addDialog,
    context.removeDialog,
    options.orphan
  ]);

  // Close all nested dialogs when parent dialog closes
  React.useEffect(() => {
    if (context.visible === false &&
      options.visible &&
      options.hide &&
      !options.orphan) {
      options.hide();
    }
  }, [
    context.visible,
    options.visible,
    options.hide,
    options.orphan
  ]);

  // Provider
  const providerValue = React.useMemo(() => ({
    visible: options.visible,
    addDialog,
    removeDialog
  }), [options.visible, addDialog, removeDialog]);

  const wrap = React.useCallback(children => (
    <DialogContext.Provider value={providerValue}>
      {children}
    </DialogContext.Provider>), [providerValue]
  );

  return { dialogs, wrap };
}

export default useNestedDialogs;
