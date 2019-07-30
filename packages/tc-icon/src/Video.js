import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const useVideo = createUseHook({
  name: "Video",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_Video",
    viewBox: "0 0 168 104",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>Video</title>
        <path d="M12 4h84a8 8 0 018 8v80a8 8 0 01-8 8H12a8 8 0 01-8-8V12a8 8 0 018-8zm150 0a2 2 0 012 2v92a2 2 0 01-2 2l-38-36V36z" />
      </>
    ))
  })
});
const Video = createComponent({
  as: "svg",
  useHook: useVideo
});
export default Video;
