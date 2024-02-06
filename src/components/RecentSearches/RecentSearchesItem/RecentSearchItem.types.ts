import React from "react";

export type ButtonProps = {
  onClick?: () => void;
  onMouseDown?: () => void;
  text?: string;
  children?: React.ReactNode;
};
