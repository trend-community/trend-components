import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const useMessage = createUseHook({
  name: "Message",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_Message",
    viewBox: "0 0 168 128",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>Message</title>
        <path d="M148 0H20A20.02 20.02 0 000 20v88a20.02 20.02 0 0020 20h128a20.02 20.02 0 0020-20V20a20.02 20.02 0 00-20-20zm-2.52 8L84 62.65 22.52 8h122.96zM8 20a12 12 0 015.01-9.75l44.52 39.57L8.84 112.4A11.92 11.92 0 018 108V20zm140 100H20a11.844 11.844 0 01-5.77-1.48l49.29-63.38L84 73.35l20.33-18.07 46.5 64.38a12.046 12.046 0 01-2.83.34zm12-12a11.938 11.938 0 01-2.47 7.29l-47.2-65.35 44.66-39.69A12 12 0 01160 20v88z" />
      </>
    ))
  })
});
const Message = createComponent({
  as: "svg",
  useHook: useMessage
});
export default Message;
