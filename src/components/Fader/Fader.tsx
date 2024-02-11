import React from "react";
import FadeWrapper from "./Fader.styles";

const Fader: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <FadeWrapper>{children}</FadeWrapper>;
};

export default Fader;
