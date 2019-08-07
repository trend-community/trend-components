import React from 'react';
import { render } from '@testing-library/react';

import Disclosure from '../';

const content = 'disclosure';

describe('[@trend/disclosure - disclosure]', () => {
  it('should render a <Disclosure />.', () => {
    const { getByText } = render(<Disclosure>{content}</Disclosure>);

    expect(getByText(content)).toMatchInlineSnapshot(`
      <div
        class="tc-Disclosure is-hidden"
        hidden=""
        role="region"
        style="display: none;"
      >
        disclosure
      </div>
    `);
  });

  it('should render a visible <Disclosure visible />.', () => {
    const content = 'disclosure';
    const { getByText } = render(<Disclosure visible>{content}</Disclosure>);

    expect(getByText(content)).toMatchInlineSnapshot(`
      <div
        class="tc-Disclosure"
        role="region"
      >
        disclosure
      </div>
    `);
  });

  it('should render a custom class names.', () => {
    const { getByText } = render(
      <Disclosure
        classnameOptions={{
          ROOT: 'tc-Disclosure-custom',
          HIDDEN: 'is-hidden-custom'
        }}>
        {content}
      </Disclosure>
    );

    expect(getByText(content)).toMatchInlineSnapshot(`
      <div
        class="tc-Disclosure-custom is-hidden-custom"
        hidden=""
        role="region"
        style="display: none;"
      >
        disclosure
      </div>
    `);
  });

  it('should kill default class names.', () => {
    const { getByText } = render(
      <Disclosure classnameOptions={{ ROOT: false }}>{content}</Disclosure>
    );

    expect(getByText(content)).toMatchInlineSnapshot(`
      <div
        class="is-hidden"
        hidden=""
        role="region"
        style="display: none;"
      >
        disclosure
      </div>
    `);
  });
});
