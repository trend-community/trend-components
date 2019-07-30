import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const usePrint = createUseHook({
  name: "Print",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_Print",
    viewBox: "0 0 184 160",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>Print</title>
        <path d="M169.42 124H160v24a11.943 11.943 0 01-11.62 11.99l-.13.01H35.99A12 12 0 0124 148v-24h-9.07c-4.75 0-9.24-1.6-12.02-4.33A9.073 9.073 0 010 113.14V54.86C0 48.77 6.59 44 15 44h9V12A12.01 12.01 0 0136 0h112a12.01 12.01 0 0112 12v32h9c8.41 0 15 4.77 15 10.86v58.28c0 6.03-6.27 10.69-14.58 10.86zM32 148a3.947 3.947 0 001.22 2.87 4 4 0 002.91 1.13h112.05a3.983 3.983 0 003.82-4v-40H32v40zM152 12a4 4 0 00-4-4H36a4 4 0 00-4 4v32h120V12zm24 42.86c0-.74-2.41-2.86-7-2.86H15c-4.59 0-7 2.12-7 2.86v58.28a1.5 1.5 0 00.51.82c1 .98 3.4 2.11 6.76 2.04H24v-16h136v16h9.34c4.34-.09 6.66-2.16 6.66-2.86V54.86zM72 92H56a12.014 12.014 0 01-12-12v-8a12.014 12.014 0 0112-12h16a12.013 12.013 0 0112 12v8a12.013 12.013 0 01-12 12zm4-20a4 4 0 00-4-4H56a4 4 0 00-4 4v8a4 4 0 004 4h16a4 4 0 004-4v-8zm64 52H44v-8h96v8zm0 20H44v-8h96v8z" />
      </>
    ))
  })
});
const Print = createComponent({
  as: "svg",
  useHook: usePrint
});
export default Print;
