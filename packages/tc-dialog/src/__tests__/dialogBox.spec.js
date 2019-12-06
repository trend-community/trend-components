import React from 'react';
import { render } from '@testing-library/react';

import DialogBox from '../DialogBox';

const QUERY = 'actions';

describe('[tc-dialog - DialogBox]', () => {
  it('should render the componenet.', () => {
    const { getByText } = render(<DialogBox>{QUERY}</DialogBox>);

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <div
        class="tc-Dialog-box"
      >
        actions
      </div>
    `);
  });

  it('should override classnameOptions.', () => {
    const { getByText } = render(
      <DialogBox classnameOptions={{ dialogBox: 'foobox' }}>{QUERY}</DialogBox>
    );

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <div
        class="foobox"
      >
        actions
      </div>
    `);
  });
});
