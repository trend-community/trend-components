import React from 'react';
import { render } from '@testing-library/react';

import Topbar from '../Topbar';

const QUERY = 'topbar';

describe('[tc-topbar - Topbar]', () => {
  it('should render a Topbar.', () => {
    const { getByText } = render(<Topbar>{QUERY}</Topbar>);

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <header
        class="tc-Topbar"
        style="transform: translateY(0); transition: transform 0.2s linear;"
      >
        topbar
      </header>
    `);
  });

  it('should render a `compact` Topbar.', () => {
    const { getByText } = render(<Topbar compact={true}>{QUERY}</Topbar>);

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <header
        class="tc-Topbar tc-Topbar--compact"
        style="transform: translateY(0); transition: transform 0.2s linear;"
      >
        topbar
      </header>
    `);
  });

  it('should render a `tall` Topbar.', () => {
    const { getByText } = render(<Topbar tall={true}>{QUERY}</Topbar>);

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <header
        class="tc-Topbar tc-Topbar--tall"
        style="transform: translateY(0); transition: transform 0.2s linear;"
      >
        topbar
      </header>
    `);
  });

  it('should render a `fixed` Topbar.', () => {
    const { getByText } = render(<Topbar fixed={true}>{QUERY}</Topbar>);

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <header
        class="tc-Topbar tc-Topbar--fixed"
        style="transform: translateY(0); transition: transform 0.2s linear;"
      >
        topbar
      </header>
    `);
  });

  it('should render a `fixed tall` Topbar.', () => {
    const { getByText } = render(
      <Topbar tall={true} fixed={true}>
        {QUERY}
      </Topbar>
    );

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <header
        class="tc-Topbar tc-Topbar--fixed tc-Topbar--tall"
        style="transform: translateY(0); transition: transform 0.2s linear;"
      >
        topbar
      </header>
    `);
  });

  it('should render a fixed Topbar while `fixedScroll` is on.', () => {
    const { getByText } = render(<Topbar fixedScroll={true}>{QUERY}</Topbar>);

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <header
        class="tc-Topbar tc-Topbar--fixed"
        style="transform: translateY(0); transition: transform 0.2s linear;"
      >
        topbar
      </header>
    `);
  });

  it('should merge passed styles.', () => {
    const style = { display: 'flex', transition: 'transform 1s linear' };
    const { getByText } = render(<Topbar style={style}>{QUERY}</Topbar>);

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <header
        class="tc-Topbar"
        style="transform: translateY(0); transition: transform 1s linear; display: flex;"
      >
        topbar
      </header>
    `);
  });
});
