import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const usePlay = createUseHook({
  name: "Play",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_Play",
    viewBox: "0 0 160.844 187.937",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>Play</title>
        <path d="M-.013 177.606V10.597c0-7.764 7.8-13.54 15.509-9 6.18 3.637 129.646 77.059 140.185 83.34a10.522 10.522 0 010 18.091c-7.587 4.6-131.525 78.4-140.5 83.528a10.044 10.044 0 01-15.194-8.95z" />
      </>
    ))
  })
});
const Play = createComponent({
  as: "svg",
  useHook: usePlay
});
export default Play;
