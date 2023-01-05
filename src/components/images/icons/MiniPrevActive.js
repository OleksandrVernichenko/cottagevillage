import React from "react";

const MiniPrevActive = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      fill="none"
      viewBox="0 0 50 50"
      transform="rotate(180)"
    >
      <rect
        width="50"
        height="50"
        x="50"
        y="50"
        fill="#007AFF"
        rx="25"
        transform="rotate(180 50 50)"
      ></rect>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M22.75 31.25L29 25l-6.25-6.25"
      ></path>
    </svg>
  );
};

export default MiniPrevActive;
