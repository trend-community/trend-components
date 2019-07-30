import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const useChevronRight = createUseHook({
  name: "ChevronRight",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_ChevronRight",
    viewBox: "0 0 138 188",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>ChevronRight</title>
        <path d="M0 187l75.727-93.5L0 0l62.273 1L138 94.5 62.273 188z" />
      </>
    ))
  })
});
const ChevronRight = createComponent({
  as: "svg",
  useHook: useChevronRight
});
export default ChevronRight;
