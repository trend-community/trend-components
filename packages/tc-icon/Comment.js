import React from "react";
import withIcon from "./src";

const Comment = props => (
  <svg
    aria-label="icon_Comment"
    width="1em"
    height="1em"
    viewBox="0 0 160 160"
    role="img"
    {...props}
  >
    <title>Comment</title>
    <path d="M80 128l-48 32v-32H0V0h160v128H80zM152 8H8v112h32v24l35-24h77V8z" />
  </svg>
);

export default withIcon(Comment);
