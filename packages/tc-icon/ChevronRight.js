import React from "react";
import withIcon from "./src";

const ChevronRight = props => (
  <svg
    aria-labelledby="icon_ChevronRight"
    width="1em"
    height="1em"
    viewBox="0 0 138 188"
    role="img"
    {...props}
  >
    <title id="icon_ChevronRight">ChevronRight</title>
    <path d="M0 187l75.727-93.5L0 0l62.273 1L138 94.5 62.273 188z" />
  </svg>
);

export default withIcon(ChevronRight);
