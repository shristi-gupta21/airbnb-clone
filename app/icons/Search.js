import React from "react";

export const Search = ({ color }) => {
  let strokeClass = `${color}`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      style={{
        display: "block",
        fill: "none",
        height: "16px",
        width: "16px",
        stroke: `${strokeClass}`,
        strokeWidth: "4",
        overflow: "visible",
      }}
      aria-hidden="true"
      role="presentation"
      focusable="false"
    >
      <path
        fill="none"
        d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
      ></path>
    </svg>
  );
};
