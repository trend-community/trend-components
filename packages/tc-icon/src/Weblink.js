import React from "react";
import withIcon from "./withIcon";

const Weblink = props => (
  <svg
    aria-label="icon_Weblink"
    width="1em"
    height="1em"
    viewBox="0 0 136 80"
    role="img"
    {...props}
  >
    <title>Weblink</title>
    <path d="M0 64V40a16.021 16.021 0 0 1 16-16h52a16.021 16.021 0 0 1 16 16h-8a8.011 8.011 0 0 0-8-8H16a8.011 8.011 0 0 0-8 8v24a8.011 8.011 0 0 0 8 8h52a8.011 8.011 0 0 0 8-8h8a16.02 16.02 0 0 1-16 16H16A16.02 16.02 0 0 1 0 64zm52-24h8a8.011 8.011 0 0 0 8 8h52a8.011 8.011 0 0 0 8-8V16a8.01 8.01 0 0 0-8-8H68a8.01 8.01 0 0 0-8 8h-8A16.021 16.021 0 0 1 68 0h52a16.021 16.021 0 0 1 16 16v24a16.021 16.021 0 0 1-16 16H68a16.021 16.021 0 0 1-16-16z" />
  </svg>
);

export default withIcon(Weblink);
