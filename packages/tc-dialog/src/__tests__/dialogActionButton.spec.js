import React from 'react';
import { render } from '@testing-library/react';

import DialogActionButton from '../DialogActionButton';

const QUERY = 'button';

describe('[tc-dialog - DialogActionButton]', () => {
  it('should render a button.', () => {
    const { getByText } = render(
      <DialogActionButton>{QUERY}</DialogActionButton>
    );

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <button
        class="tc-Button tc-Dialog-actions-button"
        tabindex="0"
        type="button"
      >
        button
      </button>
    `);
  });

  it('should override classnameOptions.', () => {
    const { getByText } = render(
      <DialogActionButton
        classnameOptions={{ dialogActionButton: 'foobutton' }}>
        {QUERY}
      </DialogActionButton>
    );

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <button
        class="tc-Button foobutton"
        tabindex="0"
        type="button"
      >
        button
      </button>
    `);
  });

  it('should be composed from useButton.', () => {
    const { getByText } = render(
      <DialogActionButton variant="ctab">{QUERY}</DialogActionButton>
    );

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <button
        class="tc-Button tc-Dialog-actions-button tc-Button--ctab"
        tabindex="0"
        type="button"
      >
        button
      </button>
    `);
  });
});
