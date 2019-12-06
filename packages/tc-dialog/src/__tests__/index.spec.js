import React from 'react';
import { render, fireEvent, act, waitForElement } from '@testing-library/react';

import Dialog, {
  DialogButton,
  DialogContainer,
  DialogBox,
  DialogTitle,
  DialogBody,
  DialogActions,
  DialogActionButton,
  useDialogState
} from '../';

describe('[tc-dialog]', () => {
  it('should open the dialog when dialog button has been clicked.', () => {
    const Comp = () => {
      const state = useDialogState();

      return (<>
        <DialogButton {...state}>button</DialogButton>
        <Dialog {...state} aria-label="dialog"><button>b</button></Dialog>
      </>);
    };

    const { getByText, getByLabelText } = render(<Comp />);
    const button = getByText('button');
    const dialog = getByLabelText('dialog');
    expect(dialog).not.toBeVisible();
    fireEvent.click(button);
    expect(dialog).toBeVisible();
  });

  it('should focus the first tabbable element when dialog opens', done => {
    const Comp = () => {
      const state = useDialogState();

      return (<>
        <DialogButton {...state}>button</DialogButton>
        <Dialog {...state} aria-label="dialog">
          <a href="#">link</a>
          <button>button1</button>
        </Dialog>
      </>);
    };

    const { getByText } = render(<Comp />);
    const dialogButton = getByText('button');
    expect(document.body).toHaveFocus();
    fireEvent.click(dialogButton);
    setTimeout(() => {
      expect(getByText('link')).toHaveFocus();
      done();
    });
  });

  it('should focus given element element from initialFocus.', async () => {
    const Comp = () => {
      const state = useDialogState();
      const r = React.useRef(null);

      return (<>
        <DialogButton {...state}>dialog button</DialogButton>
        <Dialog {...state} aria-label="dialog">
          <button>button1</button>
          {/* <button ref={r} id="link">link</button> */}
        </Dialog>
      </>);
    };

    const { getByText } = render(<Comp />);
    const button = getByText('dialog button');
    expect(document.body).toHaveFocus();
    fireEvent.click(button);
    const btn = await waitForElement(
      () => getByText('button1')
    )
    expect(btn).toHaveFocus();
  });

  it('should set focus to dialog.', async () => {
    const Comp = () => {
      const state = useDialogState();
      const r = React.useRef(null);

      return (<>
        <DialogButton {...state}>button</DialogButton>
        <Dialog {...state}
          aria-label="dialog"
          initialFocus={() => r.current}
          ref={r}
        />
      </>);
    };

    const { getByText, getByLabelText } = render(<Comp />);
    const button = getByText('button');
    expect(document.body).toHaveFocus();
    fireEvent.click(button);
    const dialog = await waitForElement(
      () => getByLabelText('dialog')
    )
    expect(dialog).toHaveFocus();
  });

  it('should hide dialog on escape keypress.', () => {
    const Comp = () => {
      const state = useDialogState({ visible: true });

      return (<>
        <Dialog {...state} aria-label="dialog"><button>b</button></Dialog>
      </>);
    };

    const { getByLabelText } = render(<Comp />);
    const dialog = getByLabelText('dialog');
    expect(dialog).toBeVisible();
    fireEvent.keyDown(dialog, { key: 'Escape' });
    expect(dialog).not.toBeVisible();
  });

  it('should hide dialog when a click outside is detected.', () => {
    const Comp = () => {
      const state = useDialogState({ visible: true });

      return (<>
        <Dialog {...state}
          aria-label="dialog">
         <button>b</button>
        </Dialog>
      </>);
    };

    const { getByLabelText, baseElement }= render(<Comp />);
    const dialog = getByLabelText('dialog');
    expect(dialog).toBeVisible();
    fireEvent.click(baseElement);
    expect(dialog).not.toBeVisible();
  });

  it('should close dialog when clicking on dialog button.', () => {
    const Comp = () => {
      const state = useDialogState({ visible: true });

      return (<>
        <DialogButton {...state}>button</DialogButton>
        <Dialog {...state}
          aria-label="dialog">
         <button>b</button>
        </Dialog>
      </>);
    };

    const { getByLabelText, getByText } = render(<Comp />);
    const dialog = getByLabelText('dialog');
    const button = getByText('button');
    expect(dialog).toBeVisible();
    fireEvent.click(button);
    expect(dialog).not.toBeVisible();
  });
});
