import React from "react";

const BlueBanner = React.forwardRef(function BlueBanner(props, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="49"
      height="28"
      fill="none"
      viewBox="0 0 49 28"
    >
      <path
        fill="#007AFF"
        d="M.001 2a2 2 0 012-2h44.85a2 2 0 011.81 2.851L43.817 13.15a2 2 0 000 1.702L48.66 25.15A2 2 0 0146.85 28H2.001a2 2 0 01-2-2V2z"
      ></path>
    </svg>
  );
});

export default BlueBanner;
