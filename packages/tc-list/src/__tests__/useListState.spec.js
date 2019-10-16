import { renderHook } from '@testing-library/react-hooks';

import useListState from '../useListState';

describe('[tc-list - useListState]', () => {
  it('should return the intial state.', () => {
    const result = renderHook(() => useListState()).result;

    expect(result.current).toMatchInlineSnapshot(`
      Object {
        "activeId": null,
        "currentId": null,
        "first": [Function],
        "infinite": false,
        "last": [Function],
        "move": [Function],
        "next": [Function],
        "orientation": "vertical",
        "previous": [Function],
        "previousId": null,
        "register": [Function],
        "reset": [Function],
        "setActive": [Function],
        "tabStops": Array [],
        "unregister": [Function],
      }
    `);
  });
});
