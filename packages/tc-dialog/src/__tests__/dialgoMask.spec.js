import React from 'react';
import { render } from '@testing-library/react';

import DialogMask from '../DialogMask';

describe('[tc-dialog/DialogMask]', () => {
  it('should render a mask.', () => {
    const { container } = render(<DialogMask />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="tc-Disclosure is-hidden"
        hidden=""
        role="presentation"
        style="display: none;"
      />
    `);
  });

  it('should render a visible mask.', () => {
    const { container } = render(<DialogMask visible />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="tc-Disclosure"
        role="presentation"
      />
    `);
  });
});
