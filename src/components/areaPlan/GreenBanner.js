import React from "react";

const GreenBanner = React.forwardRef(function GreenBanner(props, ref) {
  return (
    <svg
      {...props}
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="49"
      height="28"
      fill="none"
      viewBox="0 0 49 28"
    >
      <path
        fill="#06B436"
        d="M0 1.999a2 2 0 012-2h44.85a2 2 0 011.81 2.851l-4.843 10.298a2 2 0 000 1.702l4.842 10.298a2 2 0 01-1.81 2.851H2a2 2 0 01-2-2v-24z"
      ></path>
    </svg>
  );
});

export default GreenBanner;
