import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import List from '../List';
import ListItem, { useStaticListItem } from '../ListItem';
import ListItemChild from '../ListItemChild';
import useListState from '../useListState';

describe('[tc-list]', () => {
  it('should render a complete list.', () => {
    const Component = () => {
      const list = useListState();

      return (
        <List {...list}>
          <ListItem {...list}>...</ListItem>
          <ListItem {...list}>...</ListItem>
        </List>
      );
    };
    const { container } = render(<Component />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <ul
        class="tc-List"
      >
        <li
          class="tc-List-item"
          id="tc-list-1"
          tabindex="0"
        >
          ...
        </li>
        <li
          class="tc-List-item"
          id="tc-list-2"
          tabindex="-1"
        >
          ...
        </li>
      </ul>
    `);
  });

  it('should activate list item when clicked.', () => {
    const Component = () => {
      const props = useListState();

      return (
        <List {...props}>
          <ListItem {...props}>item 1</ListItem>
          <ListItem {...props}>item 2</ListItem>
        </List>
      );
    };
    const { getByText, container } = render(<Component />);
    const item1 = getByText('item 1');
    const item2 = getByText('item 2');

    fireEvent.click(item1);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <ul
        class="tc-List"
      >
        <li
          class="tc-List-item is-active"
          id="tc-list-3"
          tabindex="0"
        >
          item 1
        </li>
        <li
          class="tc-List-item is-updating"
          id="tc-list-4"
          tabindex="-1"
        >
          item 2
        </li>
      </ul>
    `);

    fireEvent.transitionEnd(item1);
    fireEvent.transitionEnd(item2);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <ul
        class="tc-List"
      >
        <li
          class="tc-List-item is-active"
          id="tc-list-3"
          tabindex="0"
        >
          item 1
        </li>
        <li
          class="tc-List-item"
          id="tc-list-4"
          tabindex="-1"
        >
          item 2
        </li>
      </ul>
    `);
  });

  it('should render a static list.', () => {
    const Component = () => {
      const props = useStaticListItem();

      return (
        <List static>
          <li {...props}>...</li>
          <li {...props}>...</li>
        </List>
      );
    };
    const { container } = render(<Component />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <ul
        class="tc-List tc-List--static"
      >
        <li
          class="tc-List-item"
        >
          ...
        </li>
        <li
          class="tc-List-item"
        >
          ...
        </li>
      </ul>
    `);
  });
});
