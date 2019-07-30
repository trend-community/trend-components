import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const useComment = createUseHook({
  name: "Comment",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_Comment",
    viewBox: "0 0 160 160",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>Comment</title>
        <path d="M80 128l-48 32v-32H0V0h160v128H80zM152 8H8v112h32v24l35-24h77V8z" />
      </>
    ))
  })
});
const Comment = createComponent({
  as: "svg",
  useHook: useComment
});
export default Comment;
