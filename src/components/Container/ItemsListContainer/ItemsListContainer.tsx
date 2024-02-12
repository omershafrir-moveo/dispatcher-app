import React from "react";
import { StyledContainer } from "./ItemsListContainer.styles";

export type StyledContainerProps = {
  children?: React.ReactNode;
};

const ItemsListContainer: React.FC<StyledContainerProps> = (props) => {
  return (
    <StyledContainer className="StyledContainer">
      {props.children}
    </StyledContainer>
  );
};

export default ItemsListContainer;
