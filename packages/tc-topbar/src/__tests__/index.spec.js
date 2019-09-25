import React from 'react';
import { render } from '@testing-library/react';

import Topbar from '../Topbar';
import TopbarInner from '../TopbarInner';
import TopbarSection from '../TopbarSection';
import TopbarTitle from '../TopbarTitle';
import TopbarIcon from '../TopbarIcon';

describe('[tc-topbar]', () => {
  it('should render a complete topbar.', () => {
    const { container } = render(
      <Topbar>
        <TopbarInner>
          <TopbarSection>
            <TopbarIcon />
            <TopbarTitle>Title</TopbarTitle>
          </TopbarSection>
        </TopbarInner>
      </Topbar>
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <header
        class="tc-Topbar"
        style="transform: translateY(0); transition: transform 0.2s linear;"
      >
        <div
          class="tc-Topbar-inner"
        >
          <div
            class="tc-Topbar-section"
          >
            <button
              class="tc-Topbar-icon"
            />
            <span
              class="tc-Topbar-title"
            >
              Title
            </span>
          </div>
        </div>
      </header>
    `);
  });
});
