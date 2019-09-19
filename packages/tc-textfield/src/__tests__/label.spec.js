import React from 'react';
import { render } from '@testing-library/react';

import TextFieldLabel from '../Label';

const LABEL = 'label';

describe('[tc-textfield/TextFieldLabel]', () => {
  it('should render a label.', () => {
    const { getByText } = render(<TextFieldLabel>{LABEL}</TextFieldLabel>);

    expect(getByText(LABEL)).toMatchInlineSnapshot(`
      <label
        class="tc-TextField-label"
      >
        label
      </label>
    `);
  });

  it('should render a label with a `for` attributes.', () => {
    const { getByText } = render(
      <TextFieldLabel textFieldId="labelID">{LABEL}</TextFieldLabel>
    );
    expect(getByText(LABEL)).toMatchInlineSnapshot(`
      <label
        class="tc-TextField-label"
        for="labelID"
      >
        label
      </label>
    `);
  });

  it('should render a active label when there is focus.', () => {
    const { getByText } = render(
      <TextFieldLabel isFocused={true}>{LABEL}</TextFieldLabel>
    );
    expect(getByText(LABEL)).toMatchInlineSnapshot(`
      <label
        class="tc-TextField-label is-active"
      >
        label
      </label>
    `);
  });

  it('should render a active label when it is dirty.', () => {
    const { getByText } = render(
      <TextFieldLabel isDirty={true}>{LABEL}</TextFieldLabel>
    );
    expect(getByText(LABEL)).toMatchInlineSnapshot(`
      <label
        class="tc-TextField-label is-active"
      >
        label
      </label>
    `);
  });
});
