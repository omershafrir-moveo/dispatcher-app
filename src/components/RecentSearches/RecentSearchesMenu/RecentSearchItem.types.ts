import React from "react";

export type ButtonProps = {
  onClick?: () => void;
  onMouseDown?: (event: MouseEvent) => void;
  text?: string;
  children?: React.ReactNode;
};
