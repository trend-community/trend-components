import React from 'react';
import { render } from '@testing-library/react';

import Helper from '../Helper';

const MESSAGE = 'Validation message.';

describe('[tc-textfield - Helper]', () => {
  it('should render a component.', () => {
    const { container } = render(<Helper helperMessage={MESSAGE} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="tc-TextField-helper"
      >
        <span>
          Validation message.
        </span>
      </div>
    `);
  });

  it('should not a render a component.', () => {
    const { container } = render(<Helper />);

    expect(container.firstChild).toMatchInlineSnapshot(`null`);
  });
});
