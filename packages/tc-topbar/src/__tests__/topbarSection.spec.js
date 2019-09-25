import React from 'react';
import { render } from '@testing-library/react';

import TopbarSection from '../TopbarSection';

const QUERY = 'topbar section';

describe('[tc-topbar - TopbarSection]', () => {
  it('should render a TopbarSection.', () => {
    const { getByText } = render(<TopbarSection>{QUERY}</TopbarSection>);

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <div
        class="tc-Topbar-section"
      >
        topbar section
      </div>
    `);
  });

  it('should render a `start` TopbarSection.', () => {
    const { getByText } = render(
      <TopbarSection variant="start">{QUERY}</TopbarSection>
    );

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <div
        class="tc-Topbar-section tc-Topbar-section--start"
      >
        topbar section
      </div>
    `);
  });

  it('should render a `end` TopbarSection.', () => {
    const { getByText } = render(
      <TopbarSection variant="end">{QUERY}</TopbarSection>
    );

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <div
        class="tc-Topbar-section tc-Topbar-section--end"
      >
        topbar section
      </div>
    `);
  });
});
