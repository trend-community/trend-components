import React from 'react';
import { render } from '@testing-library/react';

import DialogActions from '../DialogActions';

const QUERY = 'actions';

describe('[tc-dialog - DialogActions]', () => {
  it('should render the componenet.', () => {
    const { getByText } = render(<DialogActions>{QUERY}</DialogActions>);

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <div
        class="tc-Dialog-actions"
      >
        actions
      </div>
    `);
  });

  it('should override classnameOptions.', () => {
    const { getByText } = render(
      <DialogActions classnameOptions={{ dialogActions: undefined }}>
        {QUERY}
      </DialogActions>
    );

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <div
        class=""
      >
        actions
      </div>
    `);
  });
});
