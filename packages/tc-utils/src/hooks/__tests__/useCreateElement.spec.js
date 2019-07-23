import React from 'react';
import { renderHook } from "react-hooks-testing-library";

import AppProvider from '../../state/AppProvider';
import useCreateElement from '../useCreateElement';

const inlineSnapshot = `
  <div
    id="testID"
  >
    ...
  </div>
`;

describe('[tc-utils - createElement]', () => {
  it('should useCreateElement', () => {
    const { result } = renderHook(() => useCreateElement(
      'div',
      { id: 'testID' },
      '...'
    ));

    expect(result.current).toMatchInlineSnapshot(inlineSnapshot);
  });

  it('should render props.', () => {
    const { result } = renderHook(() => useCreateElement(
      'div',
      { id: 'testID' },
      ({ id }) => <div id={id} children="..." />
    ));

    expect(result.current).toMatchInlineSnapshot(inlineSnapshot)
  });

  it('should useContext.', () => {
    const { result } = renderHook(() => useCreateElement(
        'div',
        { id: 'useContext' },
        '...'
      ), {
      wrapper: ({ children }) => <AppProvider
        app={{ useCreateElement: (t, props, c) => <p {...props}>{c}</p> }}>
          {children}
      </AppProvider>
    });

    expect(result.current).toMatchInlineSnapshot(`
      <p
        id="useContext"
      >
        ...
      </p>
    `);
  });
});
