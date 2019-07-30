import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const useEdit = createUseHook({
  name: "Edit",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_Edit",
    viewBox: "0 0 143.844 143",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>Edit</title>
        <path d="M0 143l12.785-50.84L101.957 3.5a11.99 11.99 0 018.508-3.5 11.987 11.987 0 018.508 3.5l21.331 21.209a11.931 11.931 0 010 16.92L51.132 130.3zm20.03-46.759l-9 35.8 36-8.946 87.6-87.105a3.976 3.976 0 000-5.64L113.3 9.142a4.125 4.125 0 00-5.673 0z" />
      </>
    ))
  })
});
const Edit = createComponent({
  as: "svg",
  useHook: useEdit
});
export default Edit;
