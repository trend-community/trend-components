import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const useApp = createUseHook({
  name: "App",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_App",
    viewBox: "0 0 158 158",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>App</title>
        <path
          className="app_svg__cls-1"
          d="M142 68.444h-36.444a16.017 16.017 0 01-16-16V16a16.018 16.018 0 0116-16H142a16.018 16.018 0 0116 16v36.444a16.018 16.018 0 01-16 16zM105.556 8a8.009 8.009 0 00-8 8v36.444a8.009 8.009 0 008 8H142a8.009 8.009 0 008-8V16a8.009 8.009 0 00-8-8h-36.444zM52.444 68.444H16a16.018 16.018 0 01-16-16V16A16.018 16.018 0 0116 0h36.444a16.018 16.018 0 0116 16v36.444a16.017 16.017 0 01-16 16zM16 8a8.009 8.009 0 00-8 8v36.444a8.009 8.009 0 008 8h36.444a8.009 8.009 0 008-8V16a8.009 8.009 0 00-8-8H16zm36.444 150H16a16.018 16.018 0 01-16-16v-36.444a16.018 16.018 0 0116-16h36.444a16.017 16.017 0 0116 16V142a16.018 16.018 0 01-16 16zM16 97.556a8.009 8.009 0 00-8 8V142a8.009 8.009 0 008 8h36.444a8.009 8.009 0 008-8v-36.444a8.009 8.009 0 00-8-8H16zM142 158h-36.444a16.018 16.018 0 01-16-16v-36.444a16.017 16.017 0 0116-16H142a16.018 16.018 0 0116 16V142a16.019 16.019 0 01-16 16zm-36.444-60.444a8.008 8.008 0 00-8 8V142a8.009 8.009 0 008 8H142a8.009 8.009 0 008-8v-36.444a8.009 8.009 0 00-8-8h-36.444z"
        />
      </>
    ))
  })
});
const App = createComponent({
  as: "svg",
  useHook: useApp
});
export default App;
