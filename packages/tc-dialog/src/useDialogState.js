import setOptions from '@trend/utils/internal/setOptions';
import useClosedState from '@trend/utils/hooks/useClosedState';
import { useDisclosureState } from '@trend/disclosure';

const optionsProps = [
  'bodyId',
  'titleId',
  ...useDisclosureState.optionProps
];

function useDialogState(initialState = {}) {
  const {
    bodyId = undefined,
    titleId = undefined
  } = useClosedState(initialState);
  const disclosureState = useDisclosureState(initialState);

  return {
    bodyId,
    titleId,
    ...disclosureState
  }
}

export default setOptions(useDialogState, optionsProps);
