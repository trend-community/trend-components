import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

import AppProvider from '../../state/AppProvider';
import useOptions from '../useOptions';

describe('[tc-app - useOptions]', () => {
  it('should return the "use[$name]Options".', () => {
    const opts = { test: { foo: 'bar' } };
    const result = options(
      { useTestOptions: options => ({ getFoo: () => options.test.foo }) },
      'Test',
      opts
    ).current;

    expect(result.getFoo()).toEqual('bar');
  });

  it('should return just the options.', () => {
    const opts = { foo: 'bar' };
    const result = options({}, 'Test', opts, {}).current;

    expect(result).toEqual(opts);
  });
});

function options(app, ...args) {
  return renderHook(() => useOptions(...args), {
    wrapper: props => <AppProvider app={app} {...props} />
  }).result;
}
