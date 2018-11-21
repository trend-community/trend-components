import React from "react";
import withIcon from "./src";

const Video = props => (
  <svg
    aria-label="icon_Video"
    width="1em"
    height="1em"
    viewBox="0 0 168 104"
    role="img"
    {...props}
  >
    <title>Video</title>
    <path d="M12 4h84a8 8 0 0 1 8 8v80a8 8 0 0 1-8 8H12a8 8 0 0 1-8-8V12a8 8 0 0 1 8-8zm150 0a2 2 0 0 1 2 2v92a2 2 0 0 1-2 2l-38-36V36z" />
  </svg>
);

export default withIcon(Video);
