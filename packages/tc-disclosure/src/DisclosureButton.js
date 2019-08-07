import createComponent from '@trend/utils/createComponent';
import createUseHook from '@trend/utils/createUseHook';
import useAllCallbacks from '@trend/utils/hooks/useAllCallbacks';
import { useButton as useDefaultButton } from '@trend/button';
import useDisclosureState from './useDisclosureState';

const useDisclosureButton = createUseHook({
  name: 'DisclosureButton',
  compose: useDefaultButton,
  useState: useDisclosureState,
  useProps: (options, { onClick, ...props }) => ({
    'aria-expanded': !!options.visible,
    'aria-controls': options.disclosureId,
    onClick: useAllCallbacks(options.toggle, onClick),
    ...props
  })
});

const DisclosureButton = createComponent({
  as: 'button',
  useHook: useDisclosureButton
});

export { useDisclosureButton };
export default DisclosureButton;
