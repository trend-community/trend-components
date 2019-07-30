import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const useBell = createUseHook({
  name: "Bell",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_Bell",
    viewBox: "0 0 32 32",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>Bell</title>
        <path d="M15.981 32c-3.406 0-4.659-2.388-4.944-4.146H4.201a2.602 2.602 0 01-2.239-3.921l.033-.051 4.64-6.511a.997.997 0 00.12-.476V7.68c.006-.077.375-7.681 9.226-7.681s9.22 7.604 9.223 7.68v9.215c0 .174.045.338.123.481l4.679 6.568a2.601 2.601 0 01-2.244 3.909h-6.836c-.285 1.758-1.538 4.146-4.944 4.146zm-12.66-7.222a1.001 1.001 0 00.88 1.476h8.366v.8c.003.34.125 3.346 3.414 3.346s3.411-3.006 3.414-3.349l.007-.793.792-.004h7.568a1.002 1.002 0 00.878-1.481l-4.679-6.569a2.578 2.578 0 01-.352-1.307v-9.17c-.019-.37-.424-6.127-7.626-6.127-7.234 0-7.609 5.737-7.626 6.125v9.171a2.6 2.6 0 01-.358 1.32l-.033.051z" />
      </>
    ))
  })
});
const Bell = createComponent({
  as: "svg",
  useHook: useBell
});
export default Bell;
