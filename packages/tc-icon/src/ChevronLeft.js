import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const useChevronLeft = createUseHook({
  name: "ChevronLeft",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_ChevronLeft",
    viewBox: "0 0 138 188",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>ChevronLeft</title>
        <path d="M138 187L62.273 93.5 138 0 75.727 1 0 94.5 75.73 188z" />
      </>
    ))
  })
});
const ChevronLeft = createComponent({
  as: "svg",
  useHook: useChevronLeft
});
export default ChevronLeft;
