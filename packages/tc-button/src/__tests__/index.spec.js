import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';

import Button from '../';
import { cssClasses } from '../constants';

const TEXT = 'button';

describe('tc-button', () => {
  it('should render a button element.', () => {
    const { getByText } = buildComponent();
    const expected = `
      <button
        class="${cssClasses.BASE}"
        tabindex="0"
        type="button"
      >
        ${TEXT}
      </button>
    `;

    expect(getByText(TEXT)).toMatchInlineSnapshot(expected);
  });

  it('should set a `disabled` button.', () => {
    const { getByText, debug } = buildComponent({ disabled: true });
    const expected = `
      <button
        aria-disabled="true"
        class="${cssClasses.BASE}"
        disabled=""
        type="button"
      >
        ${TEXT}
      </button>
    `;

    expect(getByText(TEXT)).toMatchInlineSnapshot(expected);
  });

  it('should render `as` an anchor.', () => {
    const { getByText, debug } = buildComponent({ as: 'a', href: '/test' });
    const expected = `
      <a
        class="${cssClasses.BASE}"
        href="/test"
        role="button"
        tabindex="0"
      >
        ${TEXT}
      </a>
    `;

    expect(getByText(TEXT)).toMatchInlineSnapshot(expected);
  });

  it('should render a flat accent button.', () => {
    const wrapper = mount(<Button variant="flat" accent>button</Button>);
    const { getByText } = buildComponent({ variant: 'flat', accent: true });
    const expected = `
      <button
        class="${cssClasses.BASE} ${cssClasses.ACCENT} ${cssClasses.FLAT}"
        tabindex="0"
        type="button"
      >
        ${TEXT}
      </button>
    `;

    expect(getByText(TEXT)).toMatchInlineSnapshot(expected);
  });

  it('should render a compact ghost button.', () => {
    const { getByText } = buildComponent({
      variant: 'ghost',
      size: 'compact'
    });
    const expected = `
      <button
        class="${cssClasses.BASE} ${cssClasses.COMPACT} ${cssClasses.GHOST}"
        tabindex="0"
        type="button"
      >
        ${TEXT}
      </button>
    `;

    expect(getByText(TEXT)).toMatchInlineSnapshot(expected);
  });

  it('should render a ctab accent button.', () => {
    const { getByText } = buildComponent({
      accent: true,
      variant: 'ctab'
    });
    const expected = `
      <button
        class="${cssClasses.BASE} ${cssClasses.ACCENT} ${cssClasses.CTAB}"
        tabindex="0"
        type="button"
      >
        ${TEXT}
      </button>
    `;

    expect(getByText(TEXT)).toMatchInlineSnapshot(expected);
  });

  it('should pass through additional props to button.', () => {
    const { getByText } = buildComponent({
      'aria-label': 'test',
    });
    const expected = `
      <button
        aria-label="test"
        class="${cssClasses.BASE}"
        tabindex="0"
        type="button"
      >
        ${TEXT}
      </button>
    `;

    expect(getByText(TEXT)).toMatchInlineSnapshot(expected);
  });

  it('should expose a static prop getter for icons.', () => {
    expect(Button.getIconProps).toBeTruthy();
    expect(Button.getIconProps()).toMatchSnapshot();
    expect(Button.getIconProps({ id: 'test' })).toMatchSnapshot();
  });
});

function buildComponent(props = {}) {
  return render(<Button {...props}>{TEXT}</Button>);
}
