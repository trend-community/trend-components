import {
  createComponent,
  createUseHook,
  useApp
} from '@trend/utils';

const useVisuallyHidden = createUseHook({
  name: 'VisuallyHidden',
  compose: useApp,
  useProps: (options, { style: styles, ...htmlProps }) => ({
    style: {
      clip: 'rect(1px, 1px, 1px, 1px)',
      overflow: 'hidden',
      position: 'absolute',
      border: '0',
      height: '1px',
      padding: '0',
      width: '1px',
      ...styles
    },
    ...htmlProps
  })
});

const VisuallyHidden = createComponent({
  as: 'span',
  useHook: useVisuallyHidden
});

export { useVisuallyHidden }
export default VisuallyHidden;
