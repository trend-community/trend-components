import React from 'react';
import { renderHook } from 'react-hooks-testing-library';

import isFunction from '../internal/isFunction';
import createUseHook from '../createUseHook';

const defaults = {
  name: 'Test',
  keys: 'testKey1'
};

describe('[utils - createUseHook]', () => {
  it('should return a function.', () => {
    const result = createUseHook({ ...defaults });

    expect(isFunction(result)).toBeTruthy();
  });

  it('should a have `name` property for non-prod environments.', () => {
    const result = createUseHook({ ...defaults });

    expect(result.name).toEqual(defaults.name);
  });

  it('should return html props when hook is called.', () => {
    const props = { id: 'ID ', className: 'foobar' };
    const useHook = createUseHook({
      ...defaults,
      useProps: (options, htmlProps) => props
    });
    const { result } = renderHook(() => useHook());

    expect(result.current).toEqual(props);
  });

  it('should expose options to useProps.', () => {
    const bar = 'bar';
    const useHook = createUseHook({
      ...defaults,
      useOptions: ({ foo = bar, ...options }) => ({ foo, ...options }),
      useProps: ({ foo }, htmlProps) => ({ id: foo })
    });
    const { result } = renderHook(() => useHook());

    expect(result.current.id).toEqual(bar);
  });

  it('should create a __keys property.', () => {
    const useHook = createUseHook({ ...defaults });
    expect(Array.isArray(useHook.__keys)).toBeTruthy();
  });

  it('should store keys.', () => {
    const useHook = createUseHook({ ...defaults });

    expect(useHook.__keys).toContain(defaults.keys);
  });

  it('should store all keys.', () => {
    const useHook1 = createUseHook({ ...defaults });
    const useHook2 = createUseHook({
      name: 'Hook2',
      compose: useHook1,
      keys: 'testKey2'
    });
    const useHook3 = createUseHook({
      name: 'Hook3',
      compose: useHook2,
      keys: ['testKey3']
    });

    expect(useHook3.__keys).toEqual([defaults.keys, 'testKey2', 'testKey3']);
  });

  it('should call useCompose when available.', () => {
    const props = { id: 'ID', className: 'foobar' };
    const newId = `${props.id}-test`;
    const useCompose = jest.fn((hookOptions, {id, ...props}) => ({
      ...props,
      id: newId
    }));
    const useHook = createUseHook({
      ...defaults,
      useProps: (options, htmlProps) => props,
      useCompose
    });
    const { result: { current } } = renderHook(() => useHook());

    expect(useCompose).toHaveBeenCalledWith({}, props);
    expect(current.id).toEqual(newId);
  });

  it('should compose options.', () => {
    const props = { id: 'ID', className: 'foobar' };
    const newId = `${props.id}-test`;
    const compose1 = jest.fn((hookOptions, { id, ...props }) => ({
      id: newId,
      ...props
    }));
    const compose2 = jest.fn((hookOptions, htmlProps) => htmlProps);
    const useHook = createUseHook({
      ...defaults,
      useProps: (options, htmlProps) => props,
      compose: [compose1, compose2]
    });

    const { result: { current } } = renderHook(() => useHook());
    expect(compose1).toHaveBeenCalledWith({}, props);
    expect(compose2).toHaveBeenCalledWith({}, { ...props, id: newId });
    expect(current.id).toEqual(newId);
  });
});