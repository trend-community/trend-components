import React from 'react';
import { render } from '@testing-library/react';

import DialogBody from '../DialogBody';

const QUERY = 'body';

describe('[tc-dialog - DialogBody]', () => {
  it('should render the component.', () => {
    const { getByText } = render(<DialogBody>{QUERY}</DialogBody>);

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <div
        class="tc-Dialog-body"
      >
        body
      </div>
    `);
  });

  it('should override classnameOptions.', () => {
    const { getByText } = render(
      <DialogBody classnameOptions={{ dialogBody: 'foobody' }}>
        {QUERY}
      </DialogBody>
    );

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <div
        class="foobody"
      >
        body
      </div>
    `);
  });

  it('should add an id from bodyId.', () => {
    const { getByText } = render(
      <DialogBody bodyId="BodyID">{QUERY}</DialogBody>
    );

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <div
        class="tc-Dialog-body"
        id="BodyID"
      >
        body
      </div>
    `);
  });

  it('should override the id prop with a bodyId.', () => {
    const { getByText } = render(
      <DialogBody bodyId="BodyID" id="noid">
        {QUERY}
      </DialogBody>
    );

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <div
        class="tc-Dialog-body"
        id="BodyID"
      >
        body
      </div>
    `);
  });
});
