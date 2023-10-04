import React from "react";

export type ButtonProps = {
  onClick: () => void;
  text?: string;
  children?: React.ReactNode;
};
