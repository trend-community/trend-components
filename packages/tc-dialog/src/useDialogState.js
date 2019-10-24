import setOptions from '@trend/utils/internal/setOptions';
import { useDisclosureState } from '@trend/disclosure';

const optionsProps = [...useDisclosureState.optionProps];

function useDialogState(initialState = {}) {
  return useDisclosureState(initialState);
}

export default setOptions(useDialogState, optionsProps);
