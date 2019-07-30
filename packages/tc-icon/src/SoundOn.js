import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const useSoundOn = createUseHook({
  name: "SoundOn",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_SoundOn",
    viewBox: "0 0 189 202",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>SoundOn</title>
        <path d="M-.014 69.527v63.143h38.26l47.72 42.281V27.252L38.249 69.527H-.014zM143.574.015L132.353 20.04c20.419 9.976 35.9 43.049 35.9 81.06 0 37.684-15.217 70.514-35.379 80.8l10.976 20.12c26.375-15.264 45.16-54.682 45.16-100.915.001-46.405-18.91-85.946-45.436-101.09zm-21.822 38.947l-10.983 19.6c9.047 9.153 15.178 24.957 15.178 42.534 0 17.058-5.769 32.466-14.385 41.73l10.828 19.844c14.634-13.119 24.315-35.789 24.315-61.574 0-26.157-9.963-49.107-24.953-62.134z" />
      </>
    ))
  })
});
const SoundOn = createComponent({
  as: "svg",
  useHook: useSoundOn
});
export default SoundOn;
