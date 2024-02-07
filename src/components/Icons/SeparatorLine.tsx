import React from "react";
import styled from "styled-components";

const SeparatorLine: React.FC = () => {
  return (
    <svg
      width="100%"
      height="1"
      viewBox="0 0 1440 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line opacity="0.5" y1="0.5" x2="1440" y2="0.5" stroke="#D9DBE9" />
    </svg>
  );
};

export default SeparatorLine;
