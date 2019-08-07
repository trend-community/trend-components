import deepEqual from './internal/deepEqual';
import isFunction from './internal/isFunction';
import { isNotEnv } from './internal/env';
import isNil from './internal/isNil';
import not from './internal/not';
import toArray from './internal/toArray';

import useOptions from './hooks/useOptions';
import useProps from './hooks/useProps';

function createUseHook(options) {
  const composedHooks = toArray(options.compose);
  const useHook = (hookOptions = {}, htmlProps = {}) => {
    hookOptions = options.useOptions
      ? options.useOptions(hookOptions, htmlProps)
      : useOptions(options.name, hookOptions, htmlProps);

    htmlProps = options.useProps
      ? options.useProps(hookOptions, htmlProps)
      : useProps(options.name, hookOptions, htmlProps);

    if (options.useCompose && isFunction(options.useCompose)) {
      htmlProps = options.useCompose(hookOptions, htmlProps);
    } else if (options.compose) {
      composedHooks.forEach(hook => {
        htmlProps = isFunction(hook) && hook(hookOptions, htmlProps);
      });
    }

    return htmlProps;
  };

  if (isNotEnv('production')) {
    Object.defineProperty(useHook, 'name', {
      value: options.name
    });
  }

  useHook.__keys = [
    ...composedHooks.reduce(
      (allKeys, hook) => [...allKeys, ...(hook.__keys || [])],
      []
    ),
    ...(options.useState ? options.useState.__keys : []),
    ...(options.keys || [])
  ];

  const hasPropsAreEqual = !!(
    options.propsAreEqual || composedHooks.find(hook => !!hook.__propsAreEqual)
  );

  if (hasPropsAreEqual) {
    useHook.__propsAreEqual = (prev, next) => {
      const result = options.propsAreEqual && options.propsAreEqual(prev, next);

      if (not(isNil)(result)) {
        return result;
      }

      composedHooks.forEach(hook => {
        const propsAreEqual = hook.__propsAreEqual;
        const hookResult = propsAreEqual && propsAreEqual(prev, next);

        if (not(isNil)(hookResult)) {
          return hookResult;
        }
      });

      return deepEqual(prev, next);
    };
  }

  return useHook;
}

export default createUseHook;
