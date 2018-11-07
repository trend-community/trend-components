import React from "react";
import withIcon from "./src";

const Crop = props => (
  <svg
    aria-labelledby="icon_Crop"
    width="1em"
    height="1em"
    viewBox="0 0 160 159.938"
    role="img"
    {...props}
  >
    <title id="icon_Crop">Crop</title>
    <path d="M26.955 119.96h-9.411V53.476c0-9.5 3.271-18.335 8.973-24.239a24.042 24.042 0 0 1 18.283-7.58l115.2-.008v10l-115.316.008h-.061a15.116 15.116 0 0 0-11.539 4.744c-3.9 4.034-6.131 10.259-6.131 17.079v66.484zm90.734 18.33H0v-10h117.689c8.323 0 15.355-12.025 15.355-26.257V39.978h9.411v62.057c0 20.334-10.879 36.255-24.766 36.255zm-90.734 21.661h-9.411v-13.33h9.411v13.33zm115.5-146.634h-9.411V-.013h9.411v13.33z" />
  </svg>
);

export default withIcon(Crop);
