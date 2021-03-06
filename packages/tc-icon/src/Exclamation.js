import React from "react";
import withIcon from "./withIcon";

const Exclamation = props => (
  <svg
    aria-label="icon_Exclamation"
    width="1em"
    height="1em"
    viewBox="0 0 248 248"
    role="img"
    {...props}
  >
    <title>Exclamation</title>
    <path d="M124 216a29.143 29.143 0 1 1 29-29.143A29.107 29.107 0 0 1 124 216zm0-50.285a21.143 21.143 0 1 0 21.048 21.142A21.119 21.119 0 0 0 124 165.715zm4.975-25.144h-9.955a12.561 12.561 0 0 1-12.42-11.022L96.39 47.488a13.831 13.831 0 0 1 3.323-10.828A13.677 13.677 0 0 1 109.987 32h28.018a13.674 13.674 0 0 1 10.274 4.661 13.832 13.832 0 0 1 3.321 10.827l-10.21 82.06a12.561 12.561 0 0 1-12.418 11.023zM109.987 40a5.661 5.661 0 0 0-4.309 1.955 5.723 5.723 0 0 0-1.393 4.541l10.21 82.061a4.576 4.576 0 0 0 4.525 4.015h9.952a4.575 4.575 0 0 0 4.525-4.016l10.21-82.06a5.723 5.723 0 0 0-1.393-4.541A5.657 5.657 0 0 0 138.005 40h-28.018z" />
  </svg>
);

export default withIcon(Exclamation);
