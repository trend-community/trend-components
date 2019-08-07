import React from 'react';
import cn from 'classnames';

import createComponent from '@trend/utils/createComponent';
import createUseHook from '@trend/utils/createUseHook';
import useAllCallbacks from '@trend/utils/hooks/useAllCallbacks';
import useApp from '@trend/utils/hooks/useApp';
import useClassnameOptions from '@trend/utils/hooks/useClassnameOptions';
import useDisclosureState from './useDisclosureState';

const cssClasses = {
  ROOT: 'tc-Disclosure',
  HIDDEN: 'is-hidden'
};

const useDisclosure = createUseHook({
  name: 'Disclosure',
  compose: [useApp, useClassnameOptions],
  useState: useDisclosureState,
  useProps: (
    { classnameOptions: newClassnameOptions = {}, ...options },
    { className, style = {}, ...props }
  ) => {
    const classnameOptions = { ...cssClasses, ...newClassnameOptions };
    const [stateClass, setStateClass] = React.useState(null);
    const isHidden = !options.visible;

    return {
      className: cn(classnameOptions.ROOT, className, {
        [classnameOptions.HIDDEN]: isHidden
      }),
      hidden: isHidden,
      id: options.disclosureId,
      role: 'region',
      style: isHidden ? { display: 'none', ...style } : { ...style },
      ...props
    };
  }
});

const Disclosure = createComponent({
  as: 'div',
  useHook: useDisclosure
});

export default Disclosure;
