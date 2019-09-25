import React from 'react';
import cn from 'classnames';

import createComponent from '@trend/utils/createComponent';
import createUseHook from '@trend/utils/createUseHook';
import { checkForVariant } from '@trend/utils/variant';
import useApp from '@trend/utils/hooks/useApp';
import useClassnameOptions from '@trend/utils/hooks/useClassnameOptions';

import { classNames } from './constants';

const useTopbarSection = createUseHook({
  name: 'TopbarInner',
  compose: [useApp, useClassnameOptions],
  optionProps: ['variant'],
  useOptions: (
    { classnameOptions = { ...classNames },
    ...options
    },
    props) => ({
      classnameOptions,
      ...options
    }),
  useProps: ({ classnameOptions, variant, ...options }, props) => {
    const { SECTION, SECTION_START, SECTION_END } = classnameOptions;

    return {
      ...props,
      className: cn(SECTION, props.className, {
        [SECTION_START]: checkForVariant(SECTION_START, variant),
        [SECTION_END]: checkForVariant(SECTION_END, variant)
      })
    };
  }
});

const TopbarSection = createComponent({
  as: 'div',
  useHook: useTopbarSection
});

export { useTopbarSection };
export default TopbarSection;
