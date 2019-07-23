import React from 'react';
import { renderHook } from 'react-hooks-testing-library';

import AppProvider from '../../state/AppProvider';
import useToken from '../useToken';

describe('[tc-utils - useToken]', () => {
  it('should use the token.', () => {
    const expected = 'bar'
    const result = token({ foo: expected }, 'foo').current;
    expect(result).toEqual(expected);
  });

  it('should use default value.', () => {
    const expected = 'baz';
    const result = token({ foo: 'foo'}, 'bar', expected).current;
    expect(result).toEqual(expected);
  });
});

function token(app, ...args) {
  return renderHook(() => useToken(...args), {
    wrapper: props => <AppProvider app={app} {...props} />
  }).result;
}
