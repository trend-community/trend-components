import React from 'react';
import { render } from '@testing-library/react';

import ListDivider from '../ListDivider';

describe('[tc-list - ListDivider]', () => {
  it('should render a list divider.', () => {
    const { container } = render(<ListDivider />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <li
        aria-orientation="horizontal"
        class="tc-Divider"
        role="separator"
      />
    `);
  });

  it('should render a indented list divider.', () => {
    const { container } = render(<ListDivider variant="indent" />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <li
        aria-orientation="horizontal"
        class="tc-Divider tc-Divider--indent"
        role="separator"
      />
    `);
  });
});
