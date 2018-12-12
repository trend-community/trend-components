import React from "react";
import withIcon from "./withIcon";

const Check = props => (
  <svg
    aria-label="icon_Check"
    width="1em"
    height="1em"
    viewBox="0 0 248 248"
    role="img"
    {...props}
  >
    <title>Check</title>
    <path d="M65.2 110.851a3.978 3.978 0 0 0-2.834 1.175l-17 17.025a4.016 4.016 0 0 0 0 5.675L96.369 185.8a4.007 4.007 0 0 0 5.668 0l100.6-100.73a4.02 4.02 0 0 0 0-5.674l-17-17.025a4.009 4.009 0 0 0-5.668 0L99.2 143.239l-31.171-31.212a3.975 3.975 0 0 0-2.829-1.176z" />
  </svg>
);

export default withIcon(Check);
