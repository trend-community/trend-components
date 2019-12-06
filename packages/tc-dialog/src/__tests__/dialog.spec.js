import React from 'react';
import { render } from '@testing-library/react';
import Dialog from '../Dialog';

const props = {
  disclosureId: 'dialog',
  'aria-label': 'dialog',
  // Disable body scroll (for now), body-scroll-lock not being cleaned up.
  preventBodyScroll: false
};

describe('[tc-dialog - Dialog]', () => {
  it('should not render a Dialog.', () => {
    const { baseElement } = render(<Dialog {...props}>dialog</Dialog>);

    expect(baseElement).toMatchInlineSnapshot(`
      <body>
        <div />
        <div
          class="tc-Portal"
        >
          <div
            aria-label="dialog"
            aria-modal="true"
            class="tc-Disclosure tc-Dialog is-hidden"
            data-dialog="true"
            data-focustrap="paused"
            hidden=""
            id="dialog"
            role="dialog"
            style="display: none;"
            tabindex="-1"
          >
            dialog
          </div>
        </div>
      </body>
    `);
  });

  it('should render a visible Dialog.', () => {
    const { baseElement } = render(
      <Dialog {...props} visible>
        <button>close</button>
      </Dialog>
    );

    expect(baseElement).toMatchInlineSnapshot(`
      <body>
        <div />
        <div
          class="tc-Portal"
        >
          <div
            aria-label="dialog"
            aria-modal="true"
            class="tc-Disclosure tc-Dialog is-open"
            data-dialog="true"
            data-focustrap="active"
            id="dialog"
            role="dialog"
            tabindex="-1"
          >
            <button>
              close
            </button>
          </div>
        </div>
      </body>
    `);
  });

  it('should render a non-modal Dialog.', () => {
    const { baseElement } = render(
      <Dialog {...props} modal={false} visible>
        <button>dialog</button>
      </Dialog>
    );

    expect(baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <div
            aria-label="dialog"
            aria-modal="false"
            class="tc-Disclosure"
            data-dialog="true"
            id="dialog"
            role="dialog"
            tabindex="-1"
          >
            <button>
              dialog
            </button>
          </div>
        </div>
      </body>
    `);
  });
});
