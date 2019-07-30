import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const useZoomOut = createUseHook({
  name: "ZoomOut",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_ZoomOut",
    viewBox: "0 0 184.875 159.907",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>ZoomOut</title>
        <path d="M159.907 53.749A60.4 60.4 0 0057.22 17.655a60.479 60.479 0 00-10.129 71.752l-43.111 43-.123.134c-5.048 5.437-5.159 13.219-.269 18.109l5.652 5.626a12.477 12.477 0 0017.616 0l43.6-43.484a60.124 60.124 0 0029.3 7.558c1.421 0 2.854-.045 4.275-.145a44.712 44.712 0 1055.876-66.456zm-87.723 49.669l-3.044-1.943-48.609 48.494a3.519 3.519 0 01-4.958 0l-5.652-5.638c-1.455-1.452-1.265-3.774.448-5.672l48.062-47.923-1.936-3.026a51.362 51.362 0 0179.754-63.747 50.938 50.938 0 0114.068 26.347 44.56 44.56 0 00-10.207-1.172q-1.426 0-2.854.1a38.588 38.588 0 00-9.815-16.489 38.9 38.9 0 10-31.819 66.058 44.123 44.123 0 003.358 12.616 50.913 50.913 0 01-26.796-8.005zm28.282-30.389a44.442 44.442 0 00-4.947 16.78 29.91 29.91 0 1132.8-39.1 44.628 44.628 0 00-27.853 22.32zm46.865 55.765a35.932 35.932 0 01-32.983-10.193 35.7 35.7 0 01-5.775-7.9 35.181 35.181 0 01-3.928-11.946 35.168 35.168 0 01-.112-8.987 35.774 35.774 0 0134.236-31.672c.448-.012.895-.023 1.343-.023a35.722 35.722 0 017.219 70.721zm-7.219-59.561v49.123m24.79-29.083v8.931h-49.248v-8.935h49.244z" />
      </>
    ))
  })
});
const ZoomOut = createComponent({
  as: "svg",
  useHook: useZoomOut
});
export default ZoomOut;
