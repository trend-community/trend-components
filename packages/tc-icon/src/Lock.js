import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const useLock = createUseHook({
  name: "Lock",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_Lock",
    viewBox: "0 0 248 248",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>Lock</title>
        <path d="M184.842 196H63.158A11.171 11.171 0 0152 184.842v-50.105a11.171 11.171 0 0111.158-11.158h6.737v-28.21C69.895 94.935 70.513 52 124 52s54.1 42.935 54.1 43.369v28.21h6.737A11.171 11.171 0 01196 134.737v50.105A11.171 11.171 0 01184.842 196zM63.158 131.579A3.162 3.162 0 0060 134.737v50.105A3.162 3.162 0 0063.158 188h121.684a3.162 3.162 0 003.158-3.158v-50.105a3.162 3.162 0 00-3.158-3.158h-14.737v-36.21C170.1 93.938 169.331 60 124 60S77.9 93.938 77.895 95.383v36.2H63.158zm93.473 0H91.369v-36.21c0-.219.373-21.9 32.631-21.9s32.631 21.676 32.631 21.9v36.21zm-57.262-8h49.262v-28.21c-.015-.518-.654-13.9-24.631-13.9-24.35 0-24.631 13.756-24.631 13.9v28.21z" />
      </>
    ))
  })
});
const Lock = createComponent({
  as: "svg",
  useHook: useLock
});
export default Lock;
