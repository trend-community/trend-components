import React from 'react';
import { mount } from 'enzyme';
import { render, fireEvent } from "@testing-library/react";

import Interactive, { CLICKABLE_KEYS } from '../';

const text = 'btn';

describe('tc-interactive', () => {
  it('should render a Interactive.', () => {
    const { getByText } = buildComponent();
    const expected = `
      <button
        tabindex="0"
      >
        ${text}
      </button>
    `;

    expect(getByText(text)).toMatchInlineSnapshot(expected);
  });

  it('should render a `disabled` Interactive.', () => {
    const expected = `
      <button
        aria-disabled="true"
        disabled=""
      >
        ${text}
      </button>
    `;
    const { getByText } = buildComponent({ disabled: true });

    expect(getByText(text)).toMatchInlineSnapshot(expected);
  });

  it('should render a `focusable` `disabled` Interactive.', () => {
    const expected = `
      <button
        aria-disabled="true"
        tabindex="0"
      >
        ${text}
      </button>
    `;
    const { getByText } = buildComponent({ disabled: true, focusable: true });

    expect(getByText(text)).toMatchInlineSnapshot(expected);
  });

  it('should render `as` a span.', () => {
    const { getByText } = buildComponent({ as: 'span' });
    const expected = `
      <span
        tabindex="0"
      >
        ${text}
      </span>
    `;

    expect(getByText(text)).toMatchInlineSnapshot(expected);
  });

  it('should fire a click event.', () => {
    const onClick = jest.fn();
    const { getByText } = buildComponent({ onClick });

    [1, 2, 3].forEach((_, idx) => {
      fireEvent.click(getByText(text));
      expect(onClick).toHaveBeenCalledTimes(idx + 1);
    });
  });

  it('should not fire a click event when disabled.', () => {
    const onClick = jest.fn();
    const { getByText } = buildComponent({ disabled: true, onClick });

    [1, 2, 3].forEach(() => {
      fireEvent.click(getByText(text));
      expect(onClick).toHaveBeenCalledTimes(0);
    });
  });

  it('should not fire click handler when disabled and focusable.', () => {
    const onClick = jest.fn();
    const { getByText } = buildComponent({
      disabled: true,
      focusable: true,
      onClick
    });

    [1, 2, 3].forEach(() => {
      fireEvent.click(getByText(text));
      expect(onClick).toHaveBeenCalledTimes(0);
    });
  });

  it('should be able to obtain focus.', () => {
    const { getByText } = buildComponent();
    const element = getByText(text);

    expect(element).not.toHaveFocus();
    element.focus();
    expect(element).toHaveFocus();
  });

  it('should not be able to obtain focus.', () => {
    const { getByText } = buildComponent({ disabled: true });
    const element = getByText(text);

    element.focus();
    expect(element).not.toHaveFocus();
  });

  it('should be focusable when disabled and focusable.', () => {
    const { getByText } = buildComponent({ disabled: true, focusable: true });
    const element = getByText(text);

    element.focus();
    expect(element).toHaveFocus();
  });

  it('should adjust clickable keys.', () => {
    const onClick = jest.fn();
    const { getByText } = buildComponent({ clickableKeys: ['q'], onClick });
    const element = getByText(text);

    fireEvent.keyDown(element, { key: 'q' });
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should focus on mouse down', () => {
    const { getByText } = buildComponent();
    const element = getByText(text);

    expect(element).not.toHaveFocus();
    fireEvent.mouseDown(element);
    expect(element).toHaveFocus();
  });

  it('should fire click for non-interactives.', () => {
    const onClick = jest.fn();
    const { getByText } = buildComponent({ as: 'span', onClick });

    fireEvent.click(getByText(text));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should kill click for disabled non-interactive.', () => {
    const onClick = jest.fn();
    const { getByText } = buildComponent({
      as: 'span',
      disabled: true,
      onClick
    });

    fireEvent.click(getByText(text));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('should kill click disabled focusable non-interactives.', () => {
    const onClick = jest.fn();
    const { getByText } = buildComponent({
      as: 'span',
      disabled: true,
      focusable: true,
      onClick
    });

    fireEvent.click(getByText(text));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('should allow focus for non-interactives.', () => {
    const { getByText } = buildComponent({ as: 'span' });
    const element = getByText(text);

    expect(element).not.toHaveFocus();
    element.focus();
    expect(element).toHaveFocus();
  });

  it('should kill focus for non-interactives.', () => {
    const { getByText } = buildComponent({ as: 'span', disabled: true });
    const element = getByText(text);

    expect(element).not.toHaveFocus();
    element.focus();
    expect(element).not.toHaveFocus();
  });

  it('should obtain focus for disabled focusable non-interactives.', () => {
    const { getByText } = buildComponent({
      as: 'span',
      disabled: true,
      focusable: true
    });
    const element = getByText(text);

    expect(element).not.toHaveFocus();
    element.focus();
    expect(element).toHaveFocus();
  });

  it(`should trigger click on ${CLICKABLE_KEYS} for non-interactives.`, () => {
    const onClick = jest.fn();
    const { getByText } = buildComponent({ as: 'div', onClick });
    const element = getByText(text);

    CLICKABLE_KEYS.forEach((key, idx) => {
      fireEvent.keyDown(element, { key });
      expect(onClick).toHaveBeenCalledTimes(idx + 1);
    });
  });

  it(`should not trigger click on ${CLICKABLE_KEYS} for disabled non-interactives.`,
    () => {
    const onClick = jest.fn();
    const { getByText } = buildComponent({ as: 'div', onClick, disabled: true });
    const element = getByText(text);

    CLICKABLE_KEYS.forEach((key, idx) => {
      fireEvent.keyDown(element, { key });
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  it(`should not trigger click on ${CLICKABLE_KEYS} for disabled focusable non-interactives.`,
    () => {
    const onClick = jest.fn();
    const { getByText } = buildComponent({
      as: 'div',
      onClick,
      disabled: true,
      focusable: true
    });
    const element = getByText(text);

    CLICKABLE_KEYS.forEach((key, idx) => {
      fireEvent.keyDown(element, { key });
      expect(onClick).not.toHaveBeenCalled();
    });
  });
});

function buildComponent(props = {}) {
  return render(<Interactive {...props}>{text}</Interactive>);
}
