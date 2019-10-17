import React from 'react';
import { render } from '@testing-library/react';

import Portal from '../';

describe('[tc-portal]', () => {
  it('should render a portal.', () => {
    const { baseElement } = render(<Portal>portal</Portal>);

    expect(baseElement).toMatchInlineSnapshot(`
      <body>
        <div />
        <div
          class="tc-Portal"
        >
          portal
        </div>
      </body>
    `);
  });

  it('should render a nested portal.', () => {
    const { baseElement } = render(
      <Portal>
        portal
        <Portal>nested portal</Portal>
      </Portal>
    );

    expect(baseElement).toMatchInlineSnapshot(`
      <body>
        <div />
        <div
          class="tc-Portal"
        >
          portal
          <div
            class="tc-Portal"
          >
            nested portal
          </div>
        </div>
      </body>
    `);
  });

  it('should render sibling portals.', () => {
    const { baseElement } = render(
      <>
        <Portal>portal 1</Portal>
        <Portal>portal 2</Portal>
        <Portal>portal 3</Portal>
      </>
    );

    expect(baseElement).toMatchInlineSnapshot(`
      <body>
        <div />
        <div
          class="tc-Portal"
        >
          portal 1
        </div>
        <div
          class="tc-Portal"
        >
          portal 2
        </div>
        <div
          class="tc-Portal"
        >
          portal 3
        </div>
      </body>
    `);
  });

  it('should append additional classnames.', () => {
    const { baseElement } = render(<Portal className="tc-pal">portal</Portal>);

    expect(baseElement).toMatchInlineSnapshot(`
      <body>
        <div />
        <div
          class="tc-Portal tc-pal"
        >
          portal
        </div>
      </body>
    `);
  });
});
