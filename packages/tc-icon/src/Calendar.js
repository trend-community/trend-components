import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const useCalendar = createUseHook({
  name: "Calendar",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_Calendar",
    viewBox: "0 0 120 120",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>Calendar</title>
        <path d="M16 40h16v16H16V40zm24 0h16v16H40V40zm24 0h16v16H64V40zm24 0h16v16H88V40zM16 64h16v16H16V64zm24 0h16v16H40V64zm24 0h16v16H64V64zm24 0h16v16H88V64zM16 88h16v16H16V88zm24 0h16v16H40V88zm24 0h16v16H64V88zm24 0h16v16H88V88zM0 0h120v120H0V0zm8 32h105v80H8V32z" />
      </>
    ))
  })
});
const Calendar = createComponent({
  as: "svg",
  useHook: useCalendar
});
export default Calendar;
