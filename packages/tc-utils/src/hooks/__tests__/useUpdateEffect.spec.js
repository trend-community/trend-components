import React from 'react';
import { render } from "@testing-library/react";

import useUpdateEffect from '../useUpdateEffect';

describe('[@trend/utils - hooks/useUpdateEffect]', () => {
  it('should not call effect on initial mount.', () => {
    const fn = jest.fn();
    const Component = () => {
      useUpdateEffect(fn);
      return false;
    };

    render(<Component />);
    expect(fn).not.toHaveBeenCalled();
  });

  it('should call effect on subsequent renders.', () => {
    const fn = jest.fn();
    const Component = () => {
      useUpdateEffect(fn);
      return false;
    };
    const { rerender } = render(<Component />);

    rerender(<Component />);
    expect(fn).toHaveBeenCalled();
  });
});
