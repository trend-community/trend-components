import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const useProfile = createUseHook({
  name: "Profile",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_Profile",
    viewBox: "0 0 135.188 171",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>Profile</title>
        <path d="M67.594 75.994c-14.9 0-27.968-18.691-27.968-40 0-17.8 3.323-35.992 27.968-36h.007c10.719 0 18.411 3.65 22.863 10.85 3.522 5.7 5.092 13.45 5.092 25.146.003 21.31-13.062 40.004-27.962 40.004zM67.605 8h-.011c-14.751 0-19.979 7.328-19.979 28 0 18.021 10.739 32 19.978 32s19.972-13.978 19.972-32c0-9.984-1.238-16.636-3.9-20.934C81.799 12.029 78.094 8 67.605 8zm55.919 163H11.663a11.559 11.559 0 01-8.81-4.1 12.026 12.026 0 01-2.693-9.728l7.309-45.809a11.991 11.991 0 013.776-6.979c5.2-4.677 16.76-11.665 29.879-15.96a85.47 85.47 0 0126.47-4.431A85.475 85.475 0 0194.06 88.42c13.123 4.3 24.686 11.285 29.878 15.958a11.992 11.992 0 013.78 6.978l7.312 45.825a12.021 12.021 0 01-2.7 9.717 11.558 11.558 0 01-8.806 4.102zm-55.93-79.007a77.518 77.518 0 00-23.991 4.033c-13.83 4.529-23.716 11.336-27.012 14.3a3.953 3.953 0 00-1.233 2.3l-7.31 45.812a4.033 4.033 0 00.891 3.272 3.556 3.556 0 002.724 1.29h111.861a3.557 3.557 0 002.725-1.287 4.029 4.029 0 00.892-3.261l-7.312-45.828a3.943 3.943 0 00-1.238-2.3c-3.29-2.962-13.177-9.769-27.011-14.3a77.5 77.5 0 00-23.986-4.031z" />
      </>
    ))
  })
});
const Profile = createComponent({
  as: "svg",
  useHook: useProfile
});
export default Profile;
