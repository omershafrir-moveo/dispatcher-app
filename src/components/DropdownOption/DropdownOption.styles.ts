import styled from "styled-components";
import DownArrowIcon from "../Icons/DownArrowIcon";
import THEMES, { StyledButtonProps } from "./DropdownOption.types";
import { device } from "../../util/breakpoints";
export const TextContainer = styled.div``;
const StyledOption = styled.button<StyledButtonProps>`
  width: 100%;
  height: ${(props) => THEMES.height(props.theme)};
  border-radius: ${(props) => THEMES.borderRadius(props.theme)};
  background-color: ${(props) =>
    props.disabled ? "#e9e4e4" : THEMES.backgroundColor(props.theme)};
  font-family: ${(props) => THEMES.fontFamily(props.theme)};
  font-size: ${(props) => THEMES.fontSize(props.theme)};
  color: ${(props) => (props.disabled ? "#b3b0b0" : "#5A5A89")};
  padding: 15px;
  cursor: pointer;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  position: relative;

  &:hover {
    background-color: ${(props) => THEMES.onHover(props.theme)};
  }

  /* @media ${device.mobile} {
    width: 105px;
  } */
`;

export default StyledOption;
