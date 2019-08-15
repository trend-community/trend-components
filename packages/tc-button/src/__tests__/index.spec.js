import React from 'react';
import { render } from '@testing-library/react';

import Button from '../';
import { cssClasses } from '../constants';

const QUERY = 'button';

describe('tc-button', () => {
  it('should render a button element.', () => {
    const { getByText } = buildComponent();

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <button
        class="tc-Button"
        tabindex="0"
        type="button"
      >
        button
      </button>
    `);
  });

  it('should set a `disabled` button.', () => {
    const { getByText, debug } = buildComponent({ disabled: true });

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <button
        aria-disabled="true"
        class="tc-Button"
        disabled=""
        type="button"
      >
        button
      </button>
    `);
  });

  it('should render `as` an anchor.', () => {
    const { getByText } = buildComponent({ as: 'a', href: '/test' });

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <a
        class="tc-Button"
        href="/test"
        role="button"
        tabindex="0"
      >
        button
      </a>
    `);
  });

  it('should render a flat accent button.', () => {
    const { getByText } = buildComponent({ variant: 'flat', accent: true });

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <button
        class="tc-Button tc-Button--accent tc-Button--flat"
        tabindex="0"
        type="button"
      >
        button
      </button>
    `);
  });

  it('should render a compact ghost button.', () => {
    const { getByText } = buildComponent({
      variant: 'ghost',
      size: 'compact'
    });

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <button
        class="tc-Button tc-Button--compact tc-Button--ghost"
        tabindex="0"
        type="button"
      >
        button
      </button>
    `);
  });

  it('should render a ctab accent button.', () => {
    const { getByText } = buildComponent({
      accent: true,
      variant: 'ctab'
    });

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <button
        class="tc-Button tc-Button--accent tc-Button--ctab"
        tabindex="0"
        type="button"
      >
        button
      </button>
    `);
  });

  it('should pass through additional props to button.', () => {
    const { getByText } = buildComponent({
      'aria-label': 'test'
    });

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <button
        aria-label="test"
        class="tc-Button"
        tabindex="0"
        type="button"
      >
        button
      </button>
    `);
  });

  it('should expose a static prop getter for icons.', () => {
    expect(Button.getIconProps).toBeTruthy();
    expect(Button.getIconProps()).toMatchSnapshot();
    expect(Button.getIconProps({ id: 'test' })).toMatchSnapshot();
  });
});

function buildComponent(props = {}) {
  return render(<Button {...props}>{QUERY}</Button>);
}
