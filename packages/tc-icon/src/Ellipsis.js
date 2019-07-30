import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const useEllipsis = createUseHook({
  name: "Ellipsis",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_Ellipsis",
    viewBox: "0 0 192 56",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>Ellipsis</title>
        <path d="M96 56a28 28 0 1128-28 28.031 28.031 0 01-28 28zm68 0a28 28 0 1128-28 28.031 28.031 0 01-28 28zM28 56a28 28 0 1128-28 28.032 28.032 0 01-28 28z" />
      </>
    ))
  })
});
const Ellipsis = createComponent({
  as: "svg",
  useHook: useEllipsis
});
export default Ellipsis;
