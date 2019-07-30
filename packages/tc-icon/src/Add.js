import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const useAdd = createUseHook({
  name: "Add",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_Add",
    viewBox: "0 0 96 96",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>Add</title>
        <path d="M48 0A48 48 0 110 48 48 48 0 0148 0zm26.745 41.3v12.931H54.658v20.152H41.8V54.235H22.05V41.3H41.8V21.26h12.854V41.3h20.087z" />
      </>
    ))
  })
});
const Add = createComponent({
  as: "svg",
  useHook: useAdd
});
export default Add;
