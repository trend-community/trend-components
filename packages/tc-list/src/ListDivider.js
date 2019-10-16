import React from 'react';

import createComponent from '@trend/utils/createComponent';
import createUseHook from '@trend/utils/createUseHook';

import { useDivider } from '@trend/divider';

const useListDivider = createUseHook({
  name: 'ListDivider',
  compose: useDivider
});

const ListDivider = createComponent({
  as: 'li',
  useHook: useListDivider
});

export { useListDivider };
export default ListDivider;
