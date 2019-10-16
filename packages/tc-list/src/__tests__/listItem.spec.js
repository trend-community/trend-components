import React from 'react';
import { render } from '@testing-library/react';

import ListItem from '../ListItem';

const QUERY = 'list-item';
const id = 'foo';
const props = {
  currentId: null,
  first: jest.fn(),
  last: jest.fn(),
  move: jest.fn(),
  next: jest.fn(),
  previous: jest.fn(),
  register: jest.fn(),
  unregister: jest.fn(),
  tabStops: [],
  tabStopId: id
};

describe('[tc-list - ListItem]', () => {
  it('should render the component.', () => {
    const { getByText } = render(<ListItem {...props}>{QUERY}</ListItem>);

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <li
        class="tc-List-item"
        id="foo"
        tabindex="-1"
      >
        list-item
      </li>
    `);
  });

  it('should render a disabled item.', () => {
    const { getByText } = render(
      <ListItem {...props} disabled>
        {QUERY}
      </ListItem>
    );

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <li
        aria-disabled="true"
        class="tc-List-item is-disabled"
        disabled=""
        id="foo"
      >
        list-item
      </li>
    `);
  });

  it('should render an active list item.', () => {
    const { getByText } = render(
      <ListItem {...props} activeId="foo" id="foo">
        {QUERY}
      </ListItem>
    );

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <li
        class="tc-List-item is-active"
        id="foo"
        tabindex="-1"
      >
        list-item
      </li>
    `);
  });
});
