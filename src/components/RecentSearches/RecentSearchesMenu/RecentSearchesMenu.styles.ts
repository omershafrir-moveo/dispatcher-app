import styled from "styled-components";
import { ItemsListProps } from "./RecentSearchesMenu.types";
import { ButtonProps } from "../RecentSearchesItem/RecentSearchItem.types";
import {COLORS } from "../../../global-data";

export const Container = styled.div<{ children?: React.ReactNode }>`
  display: flex;
  flex-direction: column;
`;

export const ItemsList = styled.ul<ItemsListProps>`
  background-color: ${COLORS.primaryLightColor};
  margin: 0px;
  padding: 0px;
  width: 663px;
`;

export const HeaderContainer = styled.div<{ children?: React.ReactNode }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${COLORS.primaryLightColor};
  width: 663px;
  height: 45.3px;
  border-radius: 10px 10px 0px 0px;
`;

export const HeaderTitleContainer = styled.div`
  font-family: "Roboto", sans-serif;
  color: #5a5a89;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0px;
  align-items: left;
  padding: 16px 0px 0px 15.89px;
`;

export const FooterContainer = styled.div<{ children?: React.ReactNode }>`
  background-color: ${COLORS.primaryLightColor};
  width: 663px;
  height: 8.78px;
  border-radius: 0px 0px 10px 10px;
`;

export const ClearButton = styled.button<ButtonProps>`
  color: #5a5a89;
  background-color: transparent;
  border: none;
  font-family: "Roboto", sans-serif;
  margin-right: 15.78px;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 183.333% */
`;
