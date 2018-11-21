import React from "react";
import withIcon from "./src";

const Pause = props => (
  <svg
    aria-label="icon_Pause"
    width="1em"
    height="1em"
    viewBox="0 0 147 188"
    role="img"
    {...props}
  >
    <title>Pause</title>
    <path d="M16 0h26.806a16 16 0 0 1 16 16v156a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16V16A16 16 0 0 1 16 0zm88.194 0H131a16 16 0 0 1 16 16v156a16 16 0 0 1-16 16h-26.806a16 16 0 0 1-16-16V16a16 16 0 0 1 16-16z" />
  </svg>
);

export default withIcon(Pause);
