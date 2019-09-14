import React from 'react';

// TODO: PRoptypes
const Cross = ({ color, width, height }) => (
  <svg width={35} height={35}>
    <g fill={color} fillRule="evenodd">
      <path d="M71.527.816l5.657 5.657-70.71 70.71-5.658-5.656z" />
      <path d="M1 6.657L6.657 1l70.71 70.71-5.656 5.658z" />
    </g>
  </svg>
);

export default Cross;
