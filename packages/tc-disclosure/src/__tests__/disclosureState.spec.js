import { renderHook, act } from '@testing-library/react-hooks';
import useDisclosureState from '../useDisclosureState';

const disclosureId = 'disclosure-test';

describe('[tc-disclosure - state]', () => {
  it('should have an initial state.', () => {
    const result = render({ disclosureId });
    expect(result.current).toMatchInlineSnapshot(
      {
        disclosureId,
        visible: false
      },
      `
        Object {
          "disclosureId": "disclosure-test",
          "hide": [Function],
          "show": [Function],
          "toggle": [Function],
          "visible": false,
        }
      `
    );
  });

  it('should allow for a visible initial state.', () => {
    const result = render({ disclosureId, visible: true });
    expect(result.current).toMatchInlineSnapshot(
      {
        visible: true
      },
      `
        Object {
          "disclosureId": "disclosure-test",
          "hide": [Function],
          "show": [Function],
          "toggle": [Function],
          "visible": true,
        }
      `
    );
  });

  it('should accepts initial state as a function.', () => {
    const result = render(() => ({ disclosureId, visible: true }));
    expect(result.current).toMatchInlineSnapshot(
      {
        visible: true
      },
      `
        Object {
          "disclosureId": "disclosure-test",
          "hide": [Function],
          "show": [Function],
          "toggle": [Function],
          "visible": true,
        }
      `
    );
  });

  describe('show', () => {
    it('should set visible to true.', () => {
      const result = render({ disclosureId });
      act(result.current.show);
      expect(result.current).toMatchInlineSnapshot(
        {
          visible: true
        },
        `
          Object {
            "disclosureId": "disclosure-test",
            "hide": [Function],
            "show": [Function],
            "toggle": [Function],
            "visible": true,
          }
        `
      );
    });
  });

  describe('hide', () => {
    it('should set visible to false.', () => {
      const result = render({ disclosureId, visible: true });
      act(result.current.hide);
      expect(result.current).toMatchInlineSnapshot(
        {
          visible: false
        },
        `
          Object {
            "disclosureId": "disclosure-test",
            "hide": [Function],
            "show": [Function],
            "toggle": [Function],
            "visible": false,
          }
        `
      );
    });
  });

  describe('toggle', () => {
    it('should toggle visible.', () => {
      const result = render({ disclosureId });
      act(result.current.toggle);
      expect(result.current).toMatchInlineSnapshot(
        {
          visible: true
        },
        `
        Object {
          "disclosureId": "disclosure-test",
          "hide": [Function],
          "show": [Function],
          "toggle": [Function],
          "visible": true,
        }
      `
      );
    });
  });
});

function render(...args) {
  return renderHook(() => useDisclosureState(...args)).result;
}
