import React from 'react';
import { render } from '@testing-library/react';

import VisuallyHidden, { useVisuallyHidden } from '../';

const QUERY = 'query';

describe('tc-visuallyhidden', () => {
  it('should render.', () => {
    const { getByText } = render(<VisuallyHidden>{QUERY}</VisuallyHidden>);

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <span
        style="clip: rect(1px, 1px, 1px, 1px); overflow: hidden; position: absolute; border: 0px; height: 1px; padding: 0px; width: 1px;"
      >
        query
      </span>
    `);
  });

  it('should render "as" a div tag.', () => {
    const { getByText } = render(
      <VisuallyHidden as="div">{QUERY}</VisuallyHidden>
    );
    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <div
        style="clip: rect(1px, 1px, 1px, 1px); overflow: hidden; position: absolute; border: 0px; height: 1px; padding: 0px; width: 1px;"
      >
        query
      </div>
    `);
  });
});
