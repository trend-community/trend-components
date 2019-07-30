import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const useShare = createUseHook({
  name: "Share",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_Share",
    viewBox: "0 0 153 168",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>Share</title>
        <path d="M121 116a31.917 31.917 0 01-24.142-11.009l-34.689 20.334a32 32 0 11-3.6-7.163l33.823-19.827a32 32 0 01-1.62-24.837L56.193 52.932a31.917 31.917 0 114.448-6.662l33.7 20.039A32 32 0 11121 116zm0-56a24 24 0 11-24 24 24 24 0 0124-24zM32 8A24 24 0 118 32 24 24 0 0132 8zm0 104a24 24 0 11-24 24 24 24 0 0124-24z" />
      </>
    ))
  })
});
const Share = createComponent({
  as: "svg",
  useHook: useShare
});
export default Share;
