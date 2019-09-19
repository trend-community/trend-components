import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';

import { cssClasses } from '../constants';
import useTextFieldState from '../useTextFieldState';

const textFieldId = 'textfield-id';

describe('[tc-textfield - useTextFieldState]', () => {
  it('should have an initial state.', () => {
    const result = render({ textFieldId });
    expect(result.current).toMatchInlineSnapshot(
      {
        classnameOptions: { ...cssClasses },
        isDirty: false,
        isDisabled: false,
        isFocused: false,
        isInvalid: false,
        textFieldId,
        value: ''
      },
      `
      Object {
        "blur": [Function],
        "change": [Function],
        "classnameOptions": Object {
          "ACTIVE": "is-active",
          "BEGINNING_ICON": "tc-TextField--beginningIcon",
          "DISABLED": "is-disabled",
          "ENDING_ICON": "tc-TextField--endingIcon",
          "FOCUSED": "is-focused",
          "HELPER": "tc-TextField-helper",
          "ICON": "tc-TextField-icon",
          "INPUT": "tc-TextField-input",
          "INVALID": "is-invalid",
          "LABEL": "tc-TextField-label",
          "RIM": "tc-TextField--rim",
          "ROOT": "tc-TextField",
          "STRETCH": "tc-TextField--stretch",
          "TEXTAREA": "tc-TextField--textarea",
        },
        "focus": [Function],
        "helperId": "textfield-id-helper-text",
        "helperMessage": null,
        "isDirty": false,
        "isDisabled": false,
        "isFocused": false,
        "isInvalid": false,
        "textFieldId": "textfield-id",
        "value": "",
      }
    `
    );
  });

  it('should modify the `isFocus` state on `focus`.', () => {
    const result = render({ textFieldId });
    act(result.current.focus);
    act(result.current.focus);
    act(result.current.focus);
    expect(result.current).toMatchInlineSnapshot(
      {
        isFocused: true
      },
      `
      Object {
        "blur": [Function],
        "change": [Function],
        "classnameOptions": Object {
          "ACTIVE": "is-active",
          "BEGINNING_ICON": "tc-TextField--beginningIcon",
          "DISABLED": "is-disabled",
          "ENDING_ICON": "tc-TextField--endingIcon",
          "FOCUSED": "is-focused",
          "HELPER": "tc-TextField-helper",
          "ICON": "tc-TextField-icon",
          "INPUT": "tc-TextField-input",
          "INVALID": "is-invalid",
          "LABEL": "tc-TextField-label",
          "RIM": "tc-TextField--rim",
          "ROOT": "tc-TextField",
          "STRETCH": "tc-TextField--stretch",
          "TEXTAREA": "tc-TextField--textarea",
        },
        "focus": [Function],
        "helperId": "textfield-id-helper-text",
        "helperMessage": null,
        "isDirty": false,
        "isDisabled": false,
        "isFocused": true,
        "isInvalid": false,
        "textFieldId": "textfield-id",
        "value": "",
      }
    `
    );
  });

  it('should modify the state on blur.', () => {
    const result = render({ textFieldId });
    const evt = createEvtObj('');
    act(() => result.current.focus());
    act(() => result.current.blur(evt));
    expect(result.current).toMatchInlineSnapshot(
      {
        isDirty: false,
        isFocused: false
      },
      `
      Object {
        "blur": [Function],
        "change": [Function],
        "classnameOptions": Object {
          "ACTIVE": "is-active",
          "BEGINNING_ICON": "tc-TextField--beginningIcon",
          "DISABLED": "is-disabled",
          "ENDING_ICON": "tc-TextField--endingIcon",
          "FOCUSED": "is-focused",
          "HELPER": "tc-TextField-helper",
          "ICON": "tc-TextField-icon",
          "INPUT": "tc-TextField-input",
          "INVALID": "is-invalid",
          "LABEL": "tc-TextField-label",
          "RIM": "tc-TextField--rim",
          "ROOT": "tc-TextField",
          "STRETCH": "tc-TextField--stretch",
          "TEXTAREA": "tc-TextField--textarea",
        },
        "focus": [Function],
        "helperId": "textfield-id-helper-text",
        "helperMessage": null,
        "isDirty": false,
        "isDisabled": false,
        "isFocused": false,
        "isInvalid": false,
        "textFieldId": "textfield-id",
        "value": "",
      }
    `
    );
  });

  it('should update the `value` on `change`.', () => {
    const value = 'foo';
    const result = render({ textFieldId });
    const evt = createEvtObj(value);
    act(() => result.current.change(evt));
    expect(result.current).toMatchInlineSnapshot(
      {
        value
      },
      `
      Object {
        "blur": [Function],
        "change": [Function],
        "classnameOptions": Object {
          "ACTIVE": "is-active",
          "BEGINNING_ICON": "tc-TextField--beginningIcon",
          "DISABLED": "is-disabled",
          "ENDING_ICON": "tc-TextField--endingIcon",
          "FOCUSED": "is-focused",
          "HELPER": "tc-TextField-helper",
          "ICON": "tc-TextField-icon",
          "INPUT": "tc-TextField-input",
          "INVALID": "is-invalid",
          "LABEL": "tc-TextField-label",
          "RIM": "tc-TextField--rim",
          "ROOT": "tc-TextField",
          "STRETCH": "tc-TextField--stretch",
          "TEXTAREA": "tc-TextField--textarea",
        },
        "focus": [Function],
        "helperId": "textfield-id-helper-text",
        "helperMessage": null,
        "isDirty": false,
        "isDisabled": false,
        "isFocused": false,
        "isInvalid": false,
        "textFieldId": "textfield-id",
        "value": "foo",
      }
    `
    );
  });

  it('should have a dirty state on blur.', () => {
    const value = 'foo';
    const result = render({ textFieldId, value });
    const evt = createEvtObj(value);
    act(() => result.current.focus(evt));
    act(() => result.current.blur(evt));
    expect(result.current).toMatchInlineSnapshot(
      {
        isDirty: true,
        isFocused: false,
        value
      },
      `
      Object {
        "blur": [Function],
        "change": [Function],
        "classnameOptions": Object {
          "ACTIVE": "is-active",
          "BEGINNING_ICON": "tc-TextField--beginningIcon",
          "DISABLED": "is-disabled",
          "ENDING_ICON": "tc-TextField--endingIcon",
          "FOCUSED": "is-focused",
          "HELPER": "tc-TextField-helper",
          "ICON": "tc-TextField-icon",
          "INPUT": "tc-TextField-input",
          "INVALID": "is-invalid",
          "LABEL": "tc-TextField-label",
          "RIM": "tc-TextField--rim",
          "ROOT": "tc-TextField",
          "STRETCH": "tc-TextField--stretch",
          "TEXTAREA": "tc-TextField--textarea",
        },
        "focus": [Function],
        "helperId": "textfield-id-helper-text",
        "helperMessage": null,
        "isDirty": true,
        "isDisabled": false,
        "isFocused": false,
        "isInvalid": false,
        "textFieldId": "textfield-id",
        "value": "foo",
      }
    `
    );
  });
});

function render(...args) {
  return renderHook(() => useTextFieldState(...args)).result;
}

function createEvtObj(value = '') {
  const ref = document.createElement('input');
  ref.value = value;

  return {
    target: ref
  };
}
