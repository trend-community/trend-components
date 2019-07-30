import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const useSort = createUseHook({
  name: "Sort",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_Sort",
    viewBox: "0 0 135.969 160",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>Sort</title>
        <path d="M67.974 8.917a.273.273 0 01.194.073l58.752 51.747c.077.068.112.115.115.115a.588.588 0 01-.131.382.644.644 0 01-.178.018l-117.511.609a1.511 1.511 0 01-.155-.009.585.585 0 01-.156-.373.642.642 0 01.122-.133L67.778 8.991a.273.273 0 01.2-.075m0-8.915a9.191 9.191 0 00-6.128 2.334L3.094 54.692a9.209 9.209 0 006.122 16.084h.053l117.5-.609a9.209 9.209 0 006.04-16.119L74.061 2.3A9.189 9.189 0 0067.974 0zM9.22 89.221l.007 8.915 117.5.608a1.558 1.558 0 01.161.011.585.585 0 01.152.373.663.663 0 01-.122.131l-58.749 51.748a.292.292 0 01-.39 0L9.026 98.65c-.077-.068-.112-.116-.116-.116a.586.586 0 01.134-.382.7.7 0 01.172-.016v-8.915m0 0a9.209 9.209 0 00-6.122 16.084l58.752 52.356a9.21 9.21 0 0012.215.035l58.752-51.747a9.209 9.209 0 00-6.04-16.119l-117.5-.609h-.057z" />
      </>
    ))
  })
});
const Sort = createComponent({
  as: "svg",
  useHook: useSort
});
export default Sort;
