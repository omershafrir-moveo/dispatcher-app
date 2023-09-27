import styled from "styled-components";
import { SearchItemProps, ButtonProps } from "./RecentSearchItem.types";

export const ItemContainer = styled.div`
  background-color: #ffffff;
  width: 663px;
  height: 29.3px;
  display: flex;
  justify-content: space-between;
  &:hover {
    background-color: #dfe0eb69;
  }
  border: none;
`;

export const TextContainer = styled.div<{ text: string }>`
  /* background-color: aqua; */
  width: 309px;
  height: 13px;
  margin-left: 15.89px;
  font-family: "Roboto", sans-serif;
  color: #5a5a89;
  font-size: 12px;
  align-items: left;
`;

export const DeleteButton = styled.button<ButtonProps>`
  height: 13px;
  color: none;
  background-color: transparent;
  border: none;
  margin: 0px 5px 0px 5px;
`;
