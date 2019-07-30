import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const useMute = createUseHook({
  name: "Mute",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_Mute",
    viewBox: "0 0 178.062 190.188",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>Mute</title>
        <path d="M0 60.571v66.017h40.962l.66.577 50.449-55.882V16.35L40.962 60.571H0zm155.773-11.93l-16.388 18.14a72.747 72.747 0 015.03 26.791c0 17.856-6.175 33.943-15.4 43.641l11.588 20.752c15.68-13.73 26.045-37.442 26.045-64.393a94.925 94.925 0 00-10.875-44.931zm-63.7 122.168v-51.623L65.9 148.169zm79.36-170.8l6.627 7.344L12.974 190.172l-6.645-7.34z" />
      </>
    ))
  })
});
const Mute = createComponent({
  as: "svg",
  useHook: useMute
});
export default Mute;
