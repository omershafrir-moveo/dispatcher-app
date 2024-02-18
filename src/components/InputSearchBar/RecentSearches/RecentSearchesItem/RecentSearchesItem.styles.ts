import styled from "styled-components";
import { ButtonProps } from "../RecentSearchesMenu/RecentSearchItem.types";
import { COLORS } from "../../../../global-data";

export const ItemContainer = styled.div<ButtonProps>`
  background-color: ${COLORS.primaryLightColor};
  width: 100%;
  height: 29.3px;
  display: flex;
  margin: 0px;
  padding: 0px;
  justify-content: space-between;
  border: none;
`;

export const TextContainer = styled.div<{ text: string }>`
  height: 13px;
  font-family: "Roboto", sans-serif;
  color: #5a5a89;
  font-size: 12px;
  align-items: left;
  padding-left: 15.89px;
  letter-spacing: 0.1px;
`;

export const DeleteButton = styled.button<ButtonProps>`
  height: 13px;
  color: none;
  background-color: transparent;
  border: none;
  margin-right: 15.78px;
`;
