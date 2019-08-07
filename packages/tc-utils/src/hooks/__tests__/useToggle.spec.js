import { act, renderHook } from '@testing-library/react-hooks';
import useToggle from '../useToggle';

function hook(initValue) {
  return renderHook(() => useToggle(initValue));
}

describe('[@trend/utils - hooks/useToggle]', () => {
  it('should return the initial state.', () => {
    const { result } = hook();
    const [value] = result.current;
    expect(value).toMatchInlineSnapshot(`false`);
  });

  it('should set the initial state.', () => {
    const { result } = hook(true);
    expect(result.current[0]).toMatchInlineSnapshot(`true`);
  });

  it('should throw when initial state is not a boolean.', () => {
    expect(() => hook('true').result.current).toThrow();
  });

  it('should toggle the intial state.', () => {
    const { result } = hook();
    act(() => result.current[1]());
    expect(result.current[0]).toMatchInlineSnapshot(`true`);
  });

  it('should toggle the state to `true`.', () => {
    const { result } = hook();
    act(() => result.current[1](true));
    expect(result.current[0]).toMatchInlineSnapshot(`true`);
  });

  it('should toggle the state to `false`.', () => {
    const { result } = hook(true);
    act(() => result.current[1](false));
    expect(result.current[0]).toMatchInlineSnapshot(`false`);
  });
});
