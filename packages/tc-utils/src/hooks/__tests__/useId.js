import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

import AppProvider from '../../state/AppProvider';
import useId from '../useId';

describe('[utils - hooks/useId]', () => {
  it('should return a string.', () => {
    const { result } = renderHook(() => useId());

    expect(typeof result.current).toEqual('string');
  });

  it('should return a unique id.', () => {
    const { result: id1 } = renderHook(() => useId());
    const { result: id2 } = renderHook(() => useId());

    expect(id1).not.toEqual(id2);
  });

  it('should add a prefix to id.', () => {
    const { result } = renderHook(() => useId('test'));

    expect(/test\d+/.test(result.current)).toBeTruthy();
  });
});
