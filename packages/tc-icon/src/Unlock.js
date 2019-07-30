import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const useUnlock = createUseHook({
  name: "Unlock",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_Unlock",
    viewBox: "0 0 160 160",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>Unlock</title>
        <path d="M148 160H12a12.014 12.014 0 01-12-12V92a12.014 12.014 0 0112-12h8V48c0-.48.686-48 60-48s60 47.52 60 48v12h-32V48c-.015-.609-.7-16-28-16S52.015 47.391 52 48.046V80h96a12.013 12.013 0 0112 12v56a12.013 12.013 0 01-12 12zM12 88a4 4 0 00-4 4v56a4 4 0 004 4h136a4 4 0 004-4V92a4 4 0 00-4-4H44V48c0-.24.412-24 36-24s36 23.76 36 24v4h16v-4c-.01-1.621-.844-40-52-40-21.767 0-37.118 6.779-45.625 20.147A41.126 41.126 0 0028 48v40H12z" />
      </>
    ))
  })
});
const Unlock = createComponent({
  as: "svg",
  useHook: useUnlock
});
export default Unlock;
