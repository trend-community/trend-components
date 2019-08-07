import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Disclosure, { DisclosureButton, useDisclosureState } from '../';

const content = 'Disclosure content';
const buttonText = 'Disclosure button';

function Component(props) {
  const state = useDisclosureState(props);
  return (
    <>
      <DisclosureButton {...state}>{buttonText}</DisclosureButton>
      <Disclosure {...state}>{content}</Disclosure>
    </>
  );
}

describe('[@trend/disclosure]', () => {
  it('should display the content.', () => {
    const { getByText } = render(<Component />);
    const button = getByText(buttonText);
    const disclosure = getByText(content);

    expect(disclosure).not.toBeVisible();
    fireEvent.click(button);
    expect(disclosure).toBeVisible();
  });

  it('should be visible by default.', () => {
    const { getByText } = render(<Component visible />);
    const disclosure = getByText(content);

    expect(disclosure).toBeVisible();
  });

  it('should hide a visible disclosure component.', () => {
    const { getByText } = render(<Component visible />);
    const button = getByText(buttonText);
    const disclosure = getByText(content);

    expect(disclosure).toBeVisible();
    fireEvent.click(button);
    expect(disclosure).not.toBeVisible();
  });
});
