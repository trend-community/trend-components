import React from "react";
import withIcon from "./src";

const Trash = props => (
  <svg
    aria-label="icon_Trash"
    width="1em"
    height="1em"
    viewBox="0 0 136 137"
    role="img"
    {...props}
  >
    <title>Trash</title>
    <path d="M108 137H28c-6.617 0-12-6.068-12-13.526v-92.5h-4c-7.4 0-12-4.213-12-11v-1.535A12.008 12.008 0 0 1 12 6.452h22.587l8-6.453h50.826l8 6.453h22.579A12.012 12.012 0 0 1 136 18.439v1.539c0 6.782-4.6 11-12 11h-4v92.5c0 7.455-5.383 13.522-12 13.522zM12 14.444a4 4 0 0 0-4 4v1.539c0 1.477 0 3 4 3h12v100.492c0 3 1.832 5.534 4 5.534h80c2.168 0 4-2.534 4-5.534V22.982h12c4 0 4-1.527 4-3v-1.543a4.007 4.007 0 0 0-4.008-4h-25.4l-8-6.453H45.413l-8 6.453H12zm60 93.445h-8V27.97h8v79.918zm-24 0h-8V27.97h8v79.918zm48 0h-8V27.97h8v79.918z" />
  </svg>
);

export default withIcon(Trash);
