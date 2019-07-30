import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const useMenu = createUseHook({
  name: "Menu",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_Menu",
    viewBox: "0 0 22 16",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>Menu</title>
        <path d="M1 3V1h20v2H1zm0 6V7h20v2H1zm0 6v-2h20v2H1z" />
      </>
    ))
  })
});
const Menu = createComponent({
  as: "svg",
  useHook: useMenu
});
export default Menu;
