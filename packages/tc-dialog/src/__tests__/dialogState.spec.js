import { renderHook } from '@testing-library/react-hooks';

import useDialogState from '../useDialogState';

describe('[tc-dialog - useDialogState]', () => {
  it('should have an intial state.', () => {
    const result = renderHook(() => useDialogState()).result;

    expect(result.current).toMatchInlineSnapshot(`
      Object {
        "disclosureId": "tc-disclosure-1",
        "hide": [Function],
        "show": [Function],
        "toggle": [Function],
        "visible": false,
      }
    `);
  });
});
