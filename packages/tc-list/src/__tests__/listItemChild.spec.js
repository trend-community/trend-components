import React from 'react';
import { render } from '@testing-library/react';

import ListItemChild from '../ListItemChild';

const QUERY = 'child';

describe('[tc-list - ListItemChild]', () => {
  it('should render a text list item child by default.', () => {
    const { getByText } = render(<ListItemChild>{QUERY}</ListItemChild>);

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <span
        class="tc-List-item-text"
      >
        child
      </span>
    `);
  });

  it('should render a media list item child.', () => {
    const { getByText } = render(
      <ListItemChild variant="media">{QUERY}</ListItemChild>
    );

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <span
        class="tc-List-item-media"
      >
        child
      </span>
    `);
  });

  it('should render a meta list item child.', () => {
    const { getByText } = render(
      <ListItemChild variant="meta">{QUERY}</ListItemChild>
    );

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <span
        class="tc-List-item-meta"
      >
        child
      </span>
    `);
  });

  it('should render a primary text child list item child.', () => {
    const { getByText } = render(
      <ListItemChild variant="primary">{QUERY}</ListItemChild>
    );

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <span
        class="tc-List-item-text-primary"
      >
        child
      </span>
    `);
  });

  it('should render an ancillary text child list item child.', () => {
    const { getByText } = render(
      <ListItemChild variant="ancillary">{QUERY}</ListItemChild>
    );

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <span
        class="tc-List-item-text-ancillary"
      >
        child
      </span>
    `);
  });
});
