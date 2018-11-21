import React from "react";
import withIcon from "./src";

const Menu = props => (
  <svg
    aria-label="icon_Menu"
    width="1em"
    height="1em"
    viewBox="0 0 22 16"
    role="img"
    {...props}
  >
    <title>Menu</title>
    <path d="M1 3V1h20v2H1zm0 6V7h20v2H1zm0 6v-2h20v2H1z" />
  </svg>
);

export default withIcon(Menu);
