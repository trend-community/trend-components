import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const useWeblink = createUseHook({
  name: "Weblink",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_Weblink",
    viewBox: "0 0 136 80",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>Weblink</title>
        <path d="M0 64V40a16.021 16.021 0 0116-16h52a16.021 16.021 0 0116 16h-8a8.011 8.011 0 00-8-8H16a8.011 8.011 0 00-8 8v24a8.011 8.011 0 008 8h52a8.011 8.011 0 008-8h8a16.02 16.02 0 01-16 16H16A16.02 16.02 0 010 64zm52-24h8a8.011 8.011 0 008 8h52a8.011 8.011 0 008-8V16a8.01 8.01 0 00-8-8H68a8.01 8.01 0 00-8 8h-8A16.021 16.021 0 0168 0h52a16.021 16.021 0 0116 16v24a16.021 16.021 0 01-16 16H68a16.021 16.021 0 01-16-16z" />
      </>
    ))
  })
});
const Weblink = createComponent({
  as: "svg",
  useHook: useWeblink
});
export default Weblink;
