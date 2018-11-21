import React from "react";
import withIcon from "./src";

const Ellipsis = props => (
  <svg
    aria-label="icon_Ellipsis"
    width="1em"
    height="1em"
    viewBox="0 0 192 56"
    role="img"
    {...props}
  >
    <title>Ellipsis</title>
    <path d="M96 56a28 28 0 1 1 28-28 28.031 28.031 0 0 1-28 28zm68 0a28 28 0 1 1 28-28 28.031 28.031 0 0 1-28 28zM28 56a28 28 0 1 1 28-28 28.032 28.032 0 0 1-28 28z" />
  </svg>
);

export default withIcon(Ellipsis);
