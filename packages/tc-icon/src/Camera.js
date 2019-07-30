import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const useCamera = createUseHook({
  name: "Camera",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_Camera",
    viewBox: "0 0 136 112",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>Camera</title>
        <path d="M124 112H12a12.014 12.014 0 01-12-12V28a12.014 12.014 0 0112-12h19.056a3.978 3.978 0 003.578-2.211l3.578-7.156A11.935 11.935 0 0148.944 0h38.112a11.935 11.935 0 0110.733 6.634l3.578 7.155A3.977 3.977 0 00104.944 16H124a12.014 12.014 0 0112 12v72a12.013 12.013 0 01-12 12zM12 24a4 4 0 00-4 4v72a4 4 0 004 4h112a4 4 0 004-4V28a4 4 0 00-4-4h-19.056a11.935 11.935 0 01-10.733-6.634l-3.578-7.155A3.977 3.977 0 0087.056 8H48.944a3.977 3.977 0 00-3.577 2.211l-3.578 7.156A11.935 11.935 0 0131.056 24H12zm56 68.66a32 32 0 1132-32 32.037 32.037 0 01-32 32zm0-56a24 24 0 1024 24 24.027 24.027 0 00-24-24z" />
      </>
    ))
  })
});
const Camera = createComponent({
  as: "svg",
  useHook: useCamera
});
export default Camera;
