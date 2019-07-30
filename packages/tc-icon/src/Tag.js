import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const useTag = createUseHook({
  name: "Tag",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_Tag",
    viewBox: "0 0 132.844 133",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>Tag</title>
        <path d="M129.315 79.232l-50.181 50.242a12 12 0 01-16.99 0L3.52 70.774a11.954 11.954 0 01-3.519-8.5V0H62.2a11.927 11.927 0 018.5 3.523l58.624 58.7a12.052 12.052 0 01-.009 17.009zm-5.663-11.34L65.027 9.2a3.972 3.972 0 00-2.831-1.175H8.01v54.253a3.985 3.985 0 001.173 2.835l58.625 58.7a4.1 4.1 0 005.662 0l50.182-50.243a4.018 4.018 0 000-5.678zm-65.558-9.725a18.525 18.525 0 110-26.2 18.441 18.441 0 010 26.2zm-5.663-20.528a10.5 10.5 0 100 14.857 10.527 10.527 0 000-14.857z" />
      </>
    ))
  })
});
const Tag = createComponent({
  as: "svg",
  useHook: useTag
});
export default Tag;
