import deepEqual from './internal/deepEqual';
import isFunction from './internal/isFunction';
import { isNotEnv } from './internal/env';
import isNil from './internal/isNil';
import not from './internal/not';
import setOptions from './internal/setOptions';
import toArray from './internal/toArray';

import useOptions from './hooks/useOptions';
import useProps from './hooks/useProps';

function createUseHook(config) {
  const composedHooks = toArray(config.compose);
  const useHook = (options = {}, elementProps = {}) => {
    options = useOptions(
      config.name,
      config.useOptions ? config.useOptions(options, elementProps) : options,
      elementProps
    );

    elementProps = useProps(
      config.name,
      options,
      config.useProps ? config.useProps(options, elementProps) : elementProps
    );

    if (config.useCompose && isFunction(config.useCompose)) {
      elementProps = config.useCompose(options, elementProps);
    } else if (config.compose) {
      composedHooks.forEach(hook => {
        elementProps = isFunction(hook) && hook(options, elementProps);
      });
    }

    return elementProps;
  };

  if (isNotEnv('production')) {
    Object.defineProperty(useHook, 'name', {
      value: config.name,
      writable: false
    });
  }

  setOptions(
    useHook,
    [
      ...composedHooks.reduce(
        (allOptions, hook) => [...allOptions, ...(hook.optionProps || [])],
        []
      ),
      ...(config.useState ? config.useState.optionProps : []),
      ...(config.optionProps || [])
    ]
  );

  const hasPropsAreEqual = !!(
    config.propsAreEqual || composedHooks.find(hook => !!hook.propsAreEqual)
  );

  if (hasPropsAreEqual) {
    Object.defineProperty(useHook, 'propsAreEqual', {
      value: (prevProps, nextProps) => {
        const result = config.propsAreEqual &&
          config.propsAreEqual(prevProps, nextProps);

        if (not(isNil)(result)) {
          return result;
        }

        composedHooks.forEach(hook => {
          const hookResult = hook.propsAreEqual &&
            hook.propsAreEqual(prevProps, nextProps);

          if (not(isNil)(hookResult)) {
            return hookResult;
          }
        });

        return deepEqual(prevProps, nextProps);
      },
      enumeration: true,
      writable: false
    });
  }

  return useHook;
}

export default createUseHook;
