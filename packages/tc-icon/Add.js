import React from "react";
import withIcon from "./src";

const Add = props => (
  <svg
    aria-labelledby="icon_Add"
    width="1em"
    height="1em"
    viewBox="0 0 96 96"
    role="img"
    {...props}
  >
    <title id="icon_Add">Add</title>
    <path d="M48 0A48 48 0 1 1 0 48 48 48 0 0 1 48 0zm26.745 41.3v12.931H54.658v20.152H41.8V54.235H22.05V41.3H41.8V21.26h12.854V41.3h20.087z" />
  </svg>
);

export default withIcon(Add);
