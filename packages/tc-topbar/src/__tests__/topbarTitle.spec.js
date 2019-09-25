import React from 'react';
import { render } from '@testing-library/react';

import TopbarTitle from '../TopbarTitle';

describe('[tc-topbar - TopbarTitle]', () => {
  it('shoudl render a title.', () => {
    const { getByText } = render(<TopbarTitle>Title</TopbarTitle>);

    expect(getByText('Title')).toMatchInlineSnapshot(`
      <span
        class="tc-Topbar-title"
      >
        Title
      </span>
    `);
  });
});
