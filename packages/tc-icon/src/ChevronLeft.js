import React from "react";
import withIcon from "./withIcon";

const ChevronLeft = props => (
  <svg
    aria-label="icon_ChevronLeft"
    width="1em"
    height="1em"
    viewBox="0 0 138 188"
    role="img"
    {...props}
  >
    <title>ChevronLeft</title>
    <path d="M138 187L62.273 93.5 138 0 75.727 1 0 94.5 75.73 188z" />
  </svg>
);

export default withIcon(ChevronLeft);
