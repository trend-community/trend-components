import React from "react";
import withIcon from "./src";

const Mute = props => (
  <svg
    aria-label="icon_Mute"
    width="1em"
    height="1em"
    viewBox="0 0 178.062 190.188"
    role="img"
    {...props}
  >
    <title>Mute</title>
    <path d="M0 60.571v66.017h40.962l.66.577 50.449-55.882V16.35L40.962 60.571H0zm155.773-11.93l-16.388 18.14a72.747 72.747 0 0 1 5.03 26.791c0 17.856-6.175 33.943-15.4 43.641l11.588 20.752c15.68-13.73 26.045-37.442 26.045-64.393a94.925 94.925 0 0 0-10.875-44.931zm-63.7 122.168v-51.623L65.9 148.169zm79.36-170.8l6.627 7.344L12.974 190.172l-6.645-7.34z" />
  </svg>
);

export default withIcon(Mute);
