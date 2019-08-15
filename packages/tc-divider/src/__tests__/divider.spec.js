import React from 'react';
import { render } from '@testing-library/react';

import Divider from '../';

const build = props => (
  <div data-testid={QUERY}>
    <Divider {...props} />
  </div>
);
const QUERY = 'query';

describe('tc-divider', () => {
  it('should render a divider.', () => {
    const { getByTestId } = render(build());

    expect(getByTestId(QUERY).firstChild).toMatchInlineSnapshot(`
      <hr
        aria-orientation="horizontal"
        class="tc-Divider"
        role="separator"
      />
    `);
  });

  it('should render with a vertical orientation.', () => {
    const { getByTestId } = render(build({ orientation: 'vertical' }));

    expect(getByTestId(QUERY).firstChild).toMatchInlineSnapshot(`
      <hr
        aria-orientation="vertical"
        class="tc-Divider"
        role="separator"
      />
    `);
  });

  it('should render with the "indent" variant.', () => {
    const { getByTestId } = render(build({ variant: 'indent' }));

    expect(getByTestId(QUERY).firstChild).toMatchInlineSnapshot(`
      <hr
        aria-orientation="horizontal"
        class="tc-Divider tc-Divider--indent"
        role="separator"
      />
    `);
  });
});
