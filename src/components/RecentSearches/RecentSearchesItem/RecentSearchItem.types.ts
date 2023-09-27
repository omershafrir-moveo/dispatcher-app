import React from "react";

export type SearchItemProps = {
  text: string;
  handleDelete: () => void;
  children?: React.ReactNode;
};

export type ButtonProps = {
  onClick: () => void;
  children?: React.ReactNode;
};
