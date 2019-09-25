import React from 'react';
import { render } from '@testing-library/react';

import TopbarInner from '../TopbarInner';

describe('[tc-topbar - TopbarInner]', () => {
  it('should render a TopbarInner component.', () => {
    const QUERY = 'inner';
    const { getByText } = render(<TopbarInner children={QUERY} />);

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <div
        class="tc-Topbar-inner"
      >
        inner
      </div>
    `);
  });
});
