import React from 'react';
import { render } from '@testing-library/react';

import List from '../List';

const QUERY = 'list';

describe('[tc-list - List]', () => {
  it('should render a list.', () => {
    const { getByText } = render(<List>{QUERY}</List>);

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <ul
        class="tc-List"
      >
        list
      </ul>
    `);
  });

  it('should render a condensed list.', () => {
    const { getByText } = render(<List condense>{QUERY}</List>);

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <ul
        class="tc-List tc-List--condense"
      >
        list
      </ul>
    `);
  });

  it('should render a avatar list.', () => {
    const { getByText } = render(<List avatar>{QUERY}</List>);

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <ul
        class="tc-List tc-List--avatar"
      >
        list
      </ul>
    `);
  });

  it('should render a extended list.', () => {
    const { getByText } = render(<List extend>{QUERY}</List>);

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <ul
        class="tc-List tc-List--extend"
      >
        list
      </ul>
    `);
  });

  it('should render a extended avatar list.', () => {
    const { getByText } = render(
      <List avatar extend>
        {QUERY}
      </List>
    );

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <ul
        class="tc-List tc-List--avatar tc-List--extend"
      >
        list
      </ul>
    `);
  });

  it('it should render a static list.', () => {
    const { getByText } = render(<List static>{QUERY}</List>);

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <ul
        class="tc-List tc-List--static"
      >
        list
      </ul>
    `);
  });
});
