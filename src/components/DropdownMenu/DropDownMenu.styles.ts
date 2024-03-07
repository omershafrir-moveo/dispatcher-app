import styled from "styled-components";
import { COLORS } from "../../global-data";
import { device } from "../../util/breakpoints";

export const ItemsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: calc(100% + 6px);
  background-color: ${COLORS.primaryLightColor};
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.08);
  width: 100%;
  padding: 10px 0px 10px 0px;
  border-radius: 10px;
  z-index: 500;

  @media ${device.tablet} {
    top: 0;
    left: 0;
  }
`;

export const DropDownMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 10px;
  box-shadow: none;
  margin: 0px;
  width: 25%;
  max-width: 175px;
  padding-top: none;
  padding-bottom: none;
  position: relative;
  height: 100%;

  @media ${device.tablet} {
    position: static;
  }

`;

export const StyledMenu = styled.ul`
  padding: 0;
  margin: 0;
  align-items: left;
  max-height: 111px; // 4 * height of a single option
  overflow-x: hidden;
  overflow-y: scroll;
  width: 100%;
`;
