import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import DialogButton from '../DialogButton';

const QUERY = 'button';
const props = {
  disclosureId: 'tc-dialog',
  toggle: jest.fn()
};

describe('[tc-dialog/DialogButton]', () => {
  it('should render the dialog button.', () => {
    const { getByText } = render(
      <DialogButton {...props}>{QUERY}</DialogButton>
    );

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <button
        aria-controls="tc-dialog"
        aria-expanded="false"
        aria-haspopup="dialog"
        class="tc-Button"
        tabindex="0"
        type="button"
      >
        button
      </button>
    `);
  });

  it('should render a visible dialog button.', () => {
    const { getByText } = render(
      <DialogButton {...props} visible>
        {QUERY}
      </DialogButton>
    );

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <button
        aria-controls="tc-dialog"
        aria-expanded="true"
        aria-haspopup="dialog"
        class="tc-Button"
        tabindex="0"
        type="button"
      >
        button
      </button>
    `);
  });

  it('should toggle when clicked.', () => {
    const { getByText } = render(
      <DialogButton {...props} visible>
        {QUERY}
      </DialogButton>
    );

    expect(props.toggle).toHaveBeenCalledTimes(0);
    fireEvent.click(getByText(QUERY));
    expect(props.toggle).toHaveBeenCalledTimes(1);
  });
});
