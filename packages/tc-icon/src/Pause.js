import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const usePause = createUseHook({
  name: "Pause",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_Pause",
    viewBox: "0 0 147 188",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>Pause</title>
        <path d="M16 0h26.806a16 16 0 0116 16v156a16 16 0 01-16 16H16a16 16 0 01-16-16V16A16 16 0 0116 0zm88.194 0H131a16 16 0 0116 16v156a16 16 0 01-16 16h-26.806a16 16 0 01-16-16V16a16 16 0 0116-16z" />
      </>
    ))
  })
});
const Pause = createComponent({
  as: "svg",
  useHook: usePause
});
export default Pause;
