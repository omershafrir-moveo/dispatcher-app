import React from "react";
import { StyledContainer } from "./DropDownMenuContainer.styles";

export type StyledContainerProps = {
    children?: React.ReactNode;
  };

const DropDownMenuContainer: React.FC<StyledContainerProps> = (props) => {
    return <StyledContainer>{props.children}</StyledContainer>;
};

export default DropDownMenuContainer;
