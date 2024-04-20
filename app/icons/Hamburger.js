import React from "react";

export const Hamburger = ({ color, height, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={{
        display: "block",
        fill: "none",
        height: `${height}`,
        width: `${width}`,
        stroke: `${color}`,
        strokeWidth: "3",
        overflow: "visible",
      }}
    >
      <g fill="none">
        <path d="M2 16h28M2 24h28M2 8h28"></path>
      </g>
    </svg>
  );
};
