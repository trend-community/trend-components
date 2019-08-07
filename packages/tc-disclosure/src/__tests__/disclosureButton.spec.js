import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { DisclosureButton } from '../';

const props = {
  disclosureId: 'tc-disclosure-100',
  toggle: jest.fn()
};

const btn = 'button';

describe('[@trend/disclosure - disclosure]', () => {
  it('should render a <DisclosureButton />.', () => {
    const { getByText } = render(
      <DisclosureButton {...props}>{btn}</DisclosureButton>
    );

    expect(getByText(btn)).toMatchInlineSnapshot(`
      <button
        aria-controls="tc-disclosure-100"
        aria-expanded="false"
        class="tc-Button"
        tabindex="0"
        type="button"
      >
        button
      </button>
    `);
  });

  it('should render appropriately when visible.', () => {
    const { getByText } = render(
      <DisclosureButton {...props} visible>
        {btn}
      </DisclosureButton>
    );

    expect(getByText(btn)).toMatchInlineSnapshot(`
      <button
        aria-controls="tc-disclosure-100"
        aria-expanded="true"
        class="tc-Button"
        tabindex="0"
        type="button"
      >
        button
      </button>
    `);
  });

  it('should toggle when clicked.', () => {
    const { getByText } = render(
      <DisclosureButton {...props} visible>
        {btn}
      </DisclosureButton>
    );

    expect(props.toggle).toHaveBeenCalledTimes(0);
    fireEvent.click(getByText(btn));
    expect(props.toggle).toHaveBeenCalledTimes(1);
  });
});
