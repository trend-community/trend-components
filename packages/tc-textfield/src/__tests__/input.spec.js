import React from 'react';
import { render } from '@testing-library/react';

import TextFieldInput from '../Input';

const QUERY = 'test-input';

describe('[tc-textfield - input]', () => {
  it('should render an input.', () => {
    const { getByPlaceholderText } = render(
      <TextFieldInput placeholder={QUERY} />
    );
    expect(getByPlaceholderText(QUERY)).toMatchInlineSnapshot(`
      <input
        class="tc-TextField-input"
        placeholder="test-input"
        type="text"
      />
    `);
  });

  it('should render a disabled input', () => {
    const { getByPlaceholderText } = render(
      <TextFieldInput isDisabled={true} placeholder={QUERY} />
    );

    expect(getByPlaceholderText(QUERY)).toMatchInlineSnapshot(`
      <input
        class="tc-TextField-input"
        disabled=""
        placeholder="test-input"
        type="text"
      />
    `);
  });

  it('should render an invalid input.', () => {
    const { getByPlaceholderText } = render(
      <TextFieldInput isInvalid={true} placeholder={QUERY} />
    );

    expect(getByPlaceholderText(QUERY)).toMatchInlineSnapshot(`
      <input
        aria-invalid="true"
        class="tc-TextField-input"
        placeholder="test-input"
        type="text"
      />
    `);
  });

  it('should render an textarea.', () => {
    const { getByText } = render(
      <TextFieldInput as="textarea" value={QUERY} />
    );

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <textarea
        class="tc-TextField-input"
      >
        test-input
      </textarea>
    `);
  });
});
