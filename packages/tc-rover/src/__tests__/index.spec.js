import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';

import Rover, { useRoverState } from '../';

const keyDown = key => fireEvent.keyDown(document.activeElement, { key });

describe('[tc-rover]', () => {
  it('should activate first Rover.', () => {
    const Component = () => {
      const stateProps = useRoverState();

      return (
        <>
          <Rover {...stateProps}>first</Rover>
          <Rover {...stateProps}>second</Rover>
          <Rover {...stateProps}>third</Rover>
        </>
      );
    }
    const { getByText } = render(<Component />);

    expect(getByText('first')).toHaveAttribute('tabindex', '0');
  });

  it('should move focus with keys.', () => {
    const Component = () => {
      const stateProps = useRoverState();

      return (
        <>
          <Rover {...stateProps}>first</Rover>
          <Rover {...stateProps}>second</Rover>
          <Rover {...stateProps}>third</Rover>
        </>
      );
    }
    const { getByText } = render(<Component />);
    const first = getByText('first');
    const second = getByText('second');
    const third = getByText('third');

    act(() => first.focus());
    expect(first).toHaveFocus();
    keyDown('ArrowRight');
    expect(second).toHaveFocus();
    keyDown('ArrowDown');
    expect(third).toHaveFocus();
    keyDown('ArrowRight');
    expect(third).toHaveFocus();
    keyDown('ArrowLeft');
    expect(second).toHaveFocus();
    keyDown('ArrowUp');
    expect(first).toHaveFocus();
    keyDown('End');
    expect(third).toHaveFocus();
    keyDown('Home');
    expect(first).toHaveFocus();
    keyDown('PageDown');
    expect(third).toHaveFocus();
    keyDown('PageUp');
    expect(first).toHaveFocus();
  });

  it('should not focus disabled rovers.', () => {
    const Component = () => {
      const stateProps = useRoverState();

      return (
        <>
          <Rover {...stateProps}>first</Rover>
          <Rover {...stateProps} disabled focusable>second</Rover>
          <Rover {...stateProps} disabled>third</Rover>
          <Rover {...stateProps}>fourth</Rover>
          <Rover {...stateProps} disabled>fifth</Rover>
        </>
      );
    }
    const { getByText } = render(<Component />);
    const first = getByText('first');
    const second = getByText('second');
    const fourth = getByText('fourth');

    act(() => first.focus());
    expect(first).toHaveFocus();
    keyDown('ArrowRight');
    expect(second).toHaveFocus();
    keyDown('ArrowRight');
    expect(fourth).toHaveFocus();
    keyDown('ArrowDown');
    expect(fourth).toHaveFocus();
    keyDown('ArrowRight');
    expect(fourth).toHaveFocus();
    keyDown('ArrowLeft');
    expect(second).toHaveFocus();
    keyDown('ArrowLeft');
    expect(first).toHaveFocus();
    keyDown('PageDown');
    expect(fourth).toHaveFocus();
    keyDown('Home');
    expect(first).toHaveFocus();
    keyDown('End');
    expect(fourth).toHaveFocus();
  });

  it('should just move focus to rovers vertically.', () => {
    const Component = () => {
      const stateProps = useRoverState({ orientation: 'vertical' });

      return (
        <>
          <Rover {...stateProps}>first</Rover>
          <Rover {...stateProps}>second</Rover>
          <Rover {...stateProps}>third</Rover>
        </>
      );
    }
    const { getByText } = render(<Component />);
    const first = getByText('first');
    const second = getByText('second');
    const third = getByText('third');

    act(() => first.focus());
    expect(first).toHaveFocus();
    keyDown('ArrowDown');
    expect(second).toHaveFocus();
    keyDown('ArrowDown');
    expect(third).toHaveFocus();
    keyDown('ArrowDown');
    expect(third).toHaveFocus();
    keyDown('ArrowLeft');
    expect(third).toHaveFocus();
    keyDown('ArrowUp');
    expect(second).toHaveFocus();
    keyDown('ArrowUp');
    expect(first).toHaveFocus();
    keyDown('ArrowRight');
    expect(first).toHaveFocus();
  });

  it('should just move focus to rovers horizontally.', () => {
    const Component = () => {
      const stateProps = useRoverState({ orientation: 'horizontal' });

      return (
        <>
          <Rover {...stateProps}>first</Rover>
          <Rover {...stateProps}>second</Rover>
          <Rover {...stateProps}>third</Rover>
        </>
      );
    }
    const { getByText } = render(<Component />);
    const first = getByText('first');
    const second = getByText('second');
    const third = getByText('third');

    act(() => first.focus());
    expect(first).toHaveFocus();
    keyDown('ArrowRight');
    expect(second).toHaveFocus();
    keyDown('ArrowRight');
    expect(third).toHaveFocus();
    keyDown('ArrowRight');
    expect(third).toHaveFocus();
    keyDown('ArrowUp');
    expect(third).toHaveFocus();
    keyDown('ArrowLeft');
    expect(second).toHaveFocus();
    keyDown('ArrowLeft');
    expect(first).toHaveFocus();
    keyDown('ArrowDown');
    expect(first).toHaveFocus();
  });

  it('should focus rovers from state api.', () => {
    const Component = () => {
      const stateProps = useRoverState();

      return (
        <>
          <button onClick={stateProps.first}>button</button>
          <button onClick={stateProps.last}>last button</button>
          <Rover {...stateProps}>first</Rover>
          <Rover {...stateProps}>second</Rover>
          <Rover {...stateProps}>third</Rover>
        </>
      );
    }    ;
    const { getByText } = render(<Component />);
    const button = getByText('button');
    const lastButton = getByText('last button');
    const first = getByText('first');
    const third = getByText('third');

    act(() => button.focus());
    expect(button).toHaveFocus();
    fireEvent.click(button);
    expect(first).toHaveFocus();
    act(() => lastButton.focus());
    expect(lastButton).toHaveFocus();
    fireEvent.click(lastButton);
    expect(third).toHaveFocus();
  });
});
