import React from 'react';
import { render } from '@testing-library/react';

import Rover from '../Rover';

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
const query = 'rover';

describe('[tc-rover/Rover]', () => {
  it('should render successfully.', () => {
    const { getByText } = render(<Rover {...props}>{query}</Rover>);

    expect(getByText(query)).toMatchInlineSnapshot(`
      <button
        id="foo"
        tabindex="-1"
      >
        rover
      </button>
    `);
  });

  it('should set the correct tabIndex.', () => {
    const { getByText } = render(
      <Rover {...props} currentId={id}>
        {query}
      </Rover>
    );

    expect(getByText(query)).toMatchInlineSnapshot(`
      <button
        id="foo"
        tabindex="0"
      >
        rover
      </button>
    `);
  });
});
