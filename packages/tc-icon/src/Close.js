import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const useClose = createUseHook({
  name: "Close",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_Close",
    viewBox: "0 0 111.719 111.719",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>Close</title>
        <path d="M110.537 9.619l-8.469-8.469a3.992 3.992 0 00-5.639 0L55.844 41.736 15.257 1.151a3.991 3.991 0 00-5.639 0L1.149 9.62a3.991 3.991 0 000 5.639l40.587 40.585L1.15 96.43a3.992 3.992 0 000 5.639l8.469 8.469a3.993 3.993 0 005.639 0l40.586-40.587 40.586 40.587a3.992 3.992 0 005.639 0l8.469-8.469a3.993 3.993 0 000-5.639L69.951 55.844l40.586-40.586a3.993 3.993 0 000-5.639z" />
      </>
    ))
  })
});
const Close = createComponent({
  as: "svg",
  useHook: useClose
});
export default Close;
