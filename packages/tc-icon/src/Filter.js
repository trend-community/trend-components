import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const useFilter = createUseHook({
  name: "Filter",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_Filter",
    viewBox: "0 0 110 104",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>Filter</title>
        <path d="M44.5 104a7.509 7.509 0 01-7.483-7.513V47.726L2.187 12.813A7.508 7.508 0 017.482 0h95.035a7.508 7.508 0 015.3 12.813L72.986 47.726v38.245a7.468 7.468 0 01-4.137 6.712L47.856 103.2a7.475 7.475 0 01-3.356.8zM8.672 8l34.135 34.214A7.464 7.464 0 0145 47.521v48.167l20-10.023V47.521a7.462 7.462 0 012.194-5.308L101.327 8H8.672z" />
      </>
    ))
  })
});
const Filter = createComponent({
  as: "svg",
  useHook: useFilter
});
export default Filter;
