import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const useExclamation = createUseHook({
  name: "Exclamation",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_Exclamation",
    viewBox: "0 0 248 248",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>Exclamation</title>
        <path d="M124 216a29.143 29.143 0 1129-29.143A29.107 29.107 0 01124 216zm0-50.285a21.143 21.143 0 1021.048 21.142A21.119 21.119 0 00124 165.715zm4.975-25.144h-9.955a12.561 12.561 0 01-12.42-11.022L96.39 47.488a13.831 13.831 0 013.323-10.828A13.677 13.677 0 01109.987 32h28.018a13.674 13.674 0 0110.274 4.661 13.832 13.832 0 013.321 10.827l-10.21 82.06a12.561 12.561 0 01-12.418 11.023zM109.987 40a5.661 5.661 0 00-4.309 1.955 5.723 5.723 0 00-1.393 4.541l10.21 82.061a4.576 4.576 0 004.525 4.015h9.952a4.575 4.575 0 004.525-4.016l10.21-82.06a5.723 5.723 0 00-1.393-4.541A5.657 5.657 0 00138.005 40h-28.018z" />
      </>
    ))
  })
});
const Exclamation = createComponent({
  as: "svg",
  useHook: useExclamation
});
export default Exclamation;
