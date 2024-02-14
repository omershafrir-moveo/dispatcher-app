import styled from "styled-components";
import { COLORS } from "../../global-data";

type StyledMenuProps = {
  numOfItems: number; // Add your custom prop here
};

export const ItemsListContainer = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  background-color: ${COLORS.primaryLightColor};
  display: inline-block;
  border-radius: 10px;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.08);
  margin: 0px;
  width: 100%;
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
  width: 25%;
  max-width: 175px;
  padding-top: none;
  padding-bottom: none;
  justify-content: center;
  align-items: center;
  background-color: red;
  position: relative;
`;

export const StyledMenu = styled.ul`
  padding: 0;
  margin: 0;
  align-items: left;
  max-height: 118px; // 4 * height of a single option
  overflow-x: hidden;
  overflow-y: scroll;
  width: 100%;
  position: absolute;
`;
