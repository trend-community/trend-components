import { renderHook } from '@testing-library/react-hooks';

import useDialogState from '../useDialogState';

describe('[tc-dialog - useDialogState]', () => {
  it('should have an intial state.', () => {
    const result = renderHook(() => useDialogState()).result;

    expect(result.current).toMatchInlineSnapshot(`
      Object {
        "bodyId": undefined,
        "disclosureId": "tc-disclosure-1",
        "hide": [Function],
        "show": [Function],
        "titleId": undefined,
        "toggle": [Function],
        "visible": false,
      }
    `);
  });

  it('should set a titleId and bodyId from initialState.', () => {
    const result = renderHook(() =>
      useDialogState({
        bodyId: 'DialogBodyId',
        titleId: 'DialogId'
      })
    ).result;

    expect(result.current).toMatchInlineSnapshot(
      {
        bodyId: 'DialogBodyId',
        titleId: 'DialogId'
      },
      `
      Object {
        "bodyId": "DialogBodyId",
        "disclosureId": "tc-disclosure-2",
        "hide": [Function],
        "show": [Function],
        "titleId": "DialogId",
        "toggle": [Function],
        "visible": false,
      }
    `
    );
  });
});
