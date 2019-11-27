import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import FocusTrap from '../FocusTrap';

const QUERY = 'focustrap';
const noop = () => {};

describe('[tc-focustrap]', () => {
  let mockFocusTrap;
  let mockCreateFocusTrap;

  beforeEach(() => {
    mockFocusTrap = {
      activate: jest.fn(),
      deactivate: jest.fn(),
      pause: jest.fn(),
      unpause: jest.fn()
    };
    mockCreateFocusTrap = jest.fn(() => mockFocusTrap);
  });

  it('should render a FocusTrap.', () => {
    const { container } = render(
      <FocusTrap>
        <button>{QUERY}</button>
      </FocusTrap>
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        data-focustrap="active"
      >
        <button>
          focustrap
        </button>
      </div>
    `);
  });

  it('should activate by default.', () => {
    const { container } = render(
      <FocusTrap __createFocusTrap__={mockCreateFocusTrap}>
        <button>{QUERY}</button>
      </FocusTrap>
    );

    expect(mockCreateFocusTrap).toHaveBeenCalledTimes(1);
  });

  it('should activate with initialFocus as selector.', () => {
    const { container } = render(
      <FocusTrap __createFocusTrap__={mockCreateFocusTrap}
        onActivate={noop}
        onDeactivate={noop}
        initialFocus="#initial-focusee">
        <button>close</button>
        <button id="initial-focusee">open</button>
      </FocusTrap>
    );

    expect(mockCreateFocusTrap).toHaveBeenCalledTimes(1);
    expect(mockCreateFocusTrap).toHaveBeenCalledWith(container.firstChild, {
      onActivate: noop,
      onDeactivate: noop,
      clickOutsideDeactivates: false,
      escapeDeactivates: true,
      returnFocusOnDeactivate: true,
      initialFocus: '#initial-focusee'
    });
  });

  it('should mount without activation.', () => {
    const { container } = render(
      <FocusTrap __createFocusTrap__={mockCreateFocusTrap}
        onActivate={noop}
        onDeactivate={noop}
        active={false}>
        <button>button</button>
      </FocusTrap>
    );

    expect(mockCreateFocusTrap).toHaveBeenCalledTimes(1);
    expect(mockFocusTrap.activate).toHaveBeenCalledTimes(0);
  });

  it('should render without activation and then activate.', () => {
    function Comp() {
      const [active, setActive] = React.useState(false);
      return (<>
        <button onClick={() => setActive(true)}>focustrap trigger</button>
        <FocusTrap __createFocusTrap__={mockCreateFocusTrap}
          onActivate={noop}
          onDeactivate={noop}
          active={active}>
          <button>button</button>
        </FocusTrap>
      </>);
    }

    const { container, getByText } = render(<Comp />);
    const trigger = getByText('focustrap trigger');

    expect(mockCreateFocusTrap).toHaveBeenCalledTimes(1);
    expect(mockFocusTrap.activate).toHaveBeenCalledTimes(0);
    fireEvent.click(trigger);
    expect(mockFocusTrap.activate).toHaveBeenCalledTimes(1);
  });
});
