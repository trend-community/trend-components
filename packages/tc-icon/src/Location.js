import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const useLocation = createUseHook({
  name: "Location",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_Location",
    viewBox: "0 0 104 163",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>Location</title>
        <path d="M52 163l-3.2-4.275C46.808 156.061 0 93.053 0 52.108 0 28.8 11.573 16.179 21.281 9.694A59.369 59.369 0 0152 0a59.374 59.374 0 0130.719 9.692C92.427 16.179 104 28.8 104 52.108c0 40.945-46.808 103.953-48.8 106.615zM52 8.021a51.642 51.642 0 00-26.281 8.345C13.961 24.218 8 36.244 8 52.108c0 32.37 33.378 82.294 44 97.358 10.62-15.065 44-65.006 44-97.358 0-15.864-5.961-27.89-17.719-35.744A51.642 51.642 0 0052 8.019zm0 76.153A32.065 32.065 0 1184 52.11a32.068 32.068 0 01-32 32.062zm0-56.113A24.048 24.048 0 1076 52.11a24.051 24.051 0 00-24-24.051z" />
      </>
    ))
  })
});
const Location = createComponent({
  as: "svg",
  useHook: useLocation
});
export default Location;
