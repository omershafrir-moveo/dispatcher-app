import styled from "styled-components";
/***
import { StyledContainerProps } from "./Container.types";

export const Container = styled.div<StyledContainerProps>`
background-color: ${(props) =>
  props.containerType === "itemsList" ? "#ffffff" : "transparent"};
  display: inline-block;
  border-radius: 10px;
  box-shadow: ${(props) =>
    props.containerType === "itemsList"
    ? "0px 4px 12px 0px rgba(0, 0, 0, 0.08)"
    : "none"};
    margin: 0px;
    padding-top: ${(props) =>
      props.containerType === "itemsList" ? "10px" : "none"};
      padding-bottom: ${(props) =>
        props.containerType === "itemsList" ? "10px" : "none"};
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        `;
        */

export const ItemsListContainer = styled.div`
  background-color: #ffffff;
  display: inline-block;
  border-radius: 10px;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.08);
  margin: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export const DropDownMenuContainer = styled.div`
  background-color: transparent;
  display: inline-block;
  border-radius: 10px;
  box-shadow: none;
  margin: 0px;
  padding-top: none;
  padding-bottom: none;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;
