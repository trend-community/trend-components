import React from "react";
import withIcon from "./src";

const Share = props => (
  <svg
    aria-labelledby="icon_Share"
    width="1em"
    height="1em"
    viewBox="0 0 153 168"
    role="img"
    {...props}
  >
    <title id="icon_Share">Share</title>
    <path d="M121 116a31.917 31.917 0 0 1-24.142-11.009l-34.689 20.334a32 32 0 1 1-3.6-7.163l33.823-19.827a32 32 0 0 1-1.62-24.837L56.193 52.932a31.917 31.917 0 1 1 4.448-6.662l33.7 20.039A32 32 0 1 1 121 116zm0-56a24 24 0 1 1-24 24 24 24 0 0 1 24-24zM32 8A24 24 0 1 1 8 32 24 24 0 0 1 32 8zm0 104a24 24 0 1 1-24 24 24 24 0 0 1 24-24z" />
  </svg>
);

export default withIcon(Share);
