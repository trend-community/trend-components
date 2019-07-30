import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const useCheck = createUseHook({
  name: "Check",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_Check",
    viewBox: "0 0 248 248",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>Check</title>
        <path d="M65.2 110.851a3.978 3.978 0 00-2.834 1.175l-17 17.025a4.016 4.016 0 000 5.675L96.369 185.8a4.007 4.007 0 005.668 0l100.6-100.73a4.02 4.02 0 000-5.674l-17-17.025a4.009 4.009 0 00-5.668 0L99.2 143.239l-31.171-31.212a3.975 3.975 0 00-2.829-1.176z" />
      </>
    ))
  })
});
const Check = createComponent({
  as: "svg",
  useHook: useCheck
});
export default Check;
