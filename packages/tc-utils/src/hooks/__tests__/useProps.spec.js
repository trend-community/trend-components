import React from 'react';
import { renderHook } from 'react-hooks-testing-library';

import AppProvider from '../../state/AppProvider';
import useProps from '../useProps';

describe('[tc-app - useProps]', () => {
  it('should "use[$name]Options".', () => {
    const result = props({
      useIdProps: options => options.id
    }, 'Id', { id: 'foo' }).current;

    expect(result).toEqual('foo');
  });

  it('should return htmlProps.', () => {
    const expected = { id: 'foo' };
    const result = props({}, 'Id', {}, expected).current;

    expect(result).toEqual(expected);
  });
});

function props(app, ...args) {
  return renderHook(() => useProps(...args), {
    wrapper: props => <AppProvider app={app} {...props} />
  }).result;
}
