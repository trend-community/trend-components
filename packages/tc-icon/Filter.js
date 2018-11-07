import React from "react";
import withIcon from "./src";

const Filter = props => (
  <svg
    aria-labelledby="icon_Filter"
    width="1em"
    height="1em"
    viewBox="0 0 110 104"
    role="img"
    {...props}
  >
    <title id="icon_Filter">Filter</title>
    <path d="M44.5 104a7.509 7.509 0 0 1-7.483-7.513V47.726L2.187 12.813A7.508 7.508 0 0 1 7.482 0h95.035a7.508 7.508 0 0 1 5.3 12.813L72.986 47.726v38.245a7.468 7.468 0 0 1-4.137 6.712L47.856 103.2a7.475 7.475 0 0 1-3.356.8zM8.672 8l34.135 34.214A7.464 7.464 0 0 1 45 47.521v48.167l20-10.023V47.521a7.462 7.462 0 0 1 2.194-5.308L101.327 8H8.672z" />
  </svg>
);

export default withIcon(Filter);
