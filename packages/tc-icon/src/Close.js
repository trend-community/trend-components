import React from "react";
import withIcon from "./withIcon";

const Close = props => (
  <svg
    aria-label="icon_Close"
    width="1em"
    height="1em"
    viewBox="0 0 111.719 111.719"
    role="img"
    {...props}
  >
    <title>Close</title>
    <path d="M110.537 9.619l-8.469-8.469a3.992 3.992 0 0 0-5.639 0L55.844 41.736 15.257 1.151a3.991 3.991 0 0 0-5.639 0L1.149 9.62a3.991 3.991 0 0 0 0 5.639l40.587 40.585L1.15 96.43a3.992 3.992 0 0 0 0 5.639l8.469 8.469a3.993 3.993 0 0 0 5.639 0l40.586-40.587 40.586 40.587a3.992 3.992 0 0 0 5.639 0l8.469-8.469a3.993 3.993 0 0 0 0-5.639L69.951 55.844l40.586-40.586a3.993 3.993 0 0 0 0-5.639z" />
  </svg>
);

export default withIcon(Close);
