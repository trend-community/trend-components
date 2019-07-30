import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const useSearch = createUseHook({
  name: "Search",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_Search",
    viewBox: "0 0 159.75 160",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>Search</title>
        <path d="M17.626 160a11.922 11.922 0 01-8.492-3.524l-5.66-5.667c-4.724-4.73-4.605-12.278.274-17.558l.107-.112 43.5-43.558a60.564 60.564 0 019.895-71.97 60.08 60.08 0 0184.912 85.02 60.345 60.345 0 01-72.062 9.805l-43.983 44.038A11.923 11.923 0 0117.626 160zm-8.048-21.254c-1.917 2.113-2.1 4.734-.443 6.4l5.66 5.668a4.094 4.094 0 005.661 0l48.478-48.54 2.714 1.743a52.086 52.086 0 0064.853-80.731 51.985 51.985 0 00-73.589 0 52.447 52.447 0 00-7.139 64.771l1.726 2.713zM139.332 99.8zM99.707 98.719a38.6 38.6 0 1127.274-11.294 38.427 38.427 0 01-27.274 11.297zm0-69.192a30.59 30.59 0 1021.613 8.95 30.452 30.452 0 00-21.613-8.947z" />
      </>
    ))
  })
});
const Search = createComponent({
  as: "svg",
  useHook: useSearch
});
export default Search;
