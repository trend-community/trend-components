import React from 'react';
import { render } from '@testing-library/react';

import DialogTitle from '../DialogTitle';

const QUERY = 'Dialog title';

describe('[tc-dialog/DialogTitle]', () => {
  it('should render a title.', () => {
    const { getByText } = render(<DialogTitle>{QUERY}</DialogTitle>);

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <h2
        class="tc-Dialog-title"
      >
        Dialog title
      </h2>
    `);
  });

  it('should add the titleId.', () => {
    const { getByText } = render(
      <DialogTitle titleId="titleId">{QUERY}</DialogTitle>
    );

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <h2
        class="tc-Dialog-title"
        id="titleId"
      >
        Dialog title
      </h2>
    `);
  });

  it('should override id if titleId.', () => {
    const { getByText } = render(
      <DialogTitle titleId="titleId" id="id">
        {QUERY}
      </DialogTitle>
    );

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <h2
        class="tc-Dialog-title"
        id="titleId"
      >
        Dialog title
      </h2>
    `);
  });

  it('should add an id.', () => {
    const { getByText } = render(<DialogTitle id="id">{QUERY}</DialogTitle>);

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <h2
        class="tc-Dialog-title"
        id="id"
      >
        Dialog title
      </h2>
    `);
  });
});
