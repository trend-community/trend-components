import React from 'react';
import { render } from '@testing-library/react';

import TextField from '../';

const QUERY = '[input would go here]';

describe('[tc-textfield - TextField]', () => {
  it('should render a TextField.', () => {
    const { getByText } = render(<TextField>{QUERY}</TextField>);

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <div
        class="tc-TextField"
      >
        [input would go here]
      </div>
    `);
  });

  it('should render a rimmed TextField.', () => {
    const { getByText } = render(<TextField variant="rim">{QUERY}</TextField>);

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <div
        class="tc-TextField tc-TextField--rim"
      >
        [input would go here]
      </div>
    `);
  });

  it('should render a textarea TextField.', () => {
    const { getByText } = render(
      <TextField variant="textarea">{QUERY}</TextField>
    );

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <div
        class="tc-TextField tc-TextField--textarea"
      >
        [input would go here]
      </div>
    `);
  });

  it('should render a stretched TextField.', () => {
    const { getByText } = render(<TextField stretch={true}>{QUERY}</TextField>);

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <div
        class="tc-TextField tc-TextField--stretch"
      >
        [input would go here]
      </div>
    `);
  });

  it('should render a disabled TextField.', () => {
    const { getByText } = render(
      <TextField isDisabled={true}>{QUERY}</TextField>
    );

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <div
        class="tc-TextField is-disabled"
      >
        [input would go here]
      </div>
    `);
  });

  it('should render a focused TextField.', () => {
    const { getByText } = render(
      <TextField isFocused={true}>{QUERY}</TextField>
    );

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <div
        class="tc-TextField is-focused"
      >
        [input would go here]
      </div>
    `);
  });

  it('should render an invalid TextField.', () => {
    const { getByText } = render(
      <TextField isInvalid={true}>{QUERY}</TextField>
    );

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <div
        class="tc-TextField is-invalid"
      >
        [input would go here]
      </div>
    `);
  });
});
