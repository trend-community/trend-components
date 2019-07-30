import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const useData = createUseHook({
  name: "Data",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_Data",
    viewBox: "0 0 160 160",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>Data</title>
        <path d="M156.147 155.792a12.9 12.9 0 01-9.5 4.208H13.344C5.986 160 0 153.667 0 145.882V52.106L48.86 2.694v-.341h.34L51.524 0h93.061c7.854 0 14.338 6.76 14.453 15.069l.947 130.6a14.462 14.462 0 01-3.838 10.123zM48.86 15.714l-33.321 33.7H48.86v-33.7zm101.285-.5a5.747 5.747 0 00-5.559-5.8h-86.83v28.233h80.059v9.412h-80.06v11.765H8.9v87.058a4.587 4.587 0 004.448 4.706h133.3a4.3 4.3 0 003.168-1.4 4.819 4.819 0 001.279-3.372zM22.173 112.941h115.641v9.412H22.173v-9.412zm0-37.647h115.641v9.412H22.173v-9.412z" />
      </>
    ))
  })
});
const Data = createComponent({
  as: "svg",
  useHook: useData
});
export default Data;
