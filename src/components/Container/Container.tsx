import React from "react";
import { StyledContainerProps } from "./Container.types";
import { ItemsListContainer, DropDownMenuContainer } from "./Container.styles";

const Container: React.FC<StyledContainerProps> = (props) => {
  if (props.containerType == "itemsList")
    return <ItemsListContainer>{props.children}</ItemsListContainer>;
  else return <DropDownMenuContainer>{props.children}</DropDownMenuContainer>;
  // return (
  //   <StyledContainer containerType={props.containerType}>
  //     {props.children}
  //   </StyledContainer>
  // );
};

export default Container;
