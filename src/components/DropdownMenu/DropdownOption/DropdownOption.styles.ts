import styled from "styled-components";
import DownArrowIcon from "../../Icons/DownArrowIcon";
import THEMES, { StyledButtonProps } from "./DropdownOption.types";
import { device } from "../../../util/breakpoints";

const StyledOption = styled.button<StyledButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${(props) => THEMES.height(props.theme)};
  border-radius: ${(props) => THEMES.borderRadius(props.theme)};
  background-color: ${(props) =>
    props.disabled ? "#e9e4e4" : THEMES.backgroundColor(props.theme)};
  font-family: ${(props) => THEMES.fontFamily(props.theme)};
  font-size: ${(props) => THEMES.fontSize(props.theme)};
  color: ${(props) => (props.disabled ? "#b3b0b0" : "#5A5A89")};
  cursor: pointer;
  text-align: left;
  position: relative;

  &:hover {
    background-color: ${(props) => THEMES.onHover(props.theme)};
  }

  @media ${device.tablet} {
    text-align: center;
    font-size: 13px;
    box-shadow: ${(props) =>
      ["defaultInputOption", "filterInputOption"].includes(props.theme)
        ? "2px 4px 2px 0px rgba(0, 0, 0, 0.15)"
        : "none"};
  }

  @media ${device.mobile} {
    text-align: center;
    justify-content: center;
    box-shadow: ${(props) =>
      props.theme == "defaultInputOption"
        ? "2px 4px 2px 0px rgba(0, 0, 0, 0.15)"
        : "none"};
    font-size: 12px;
    background-color: ${(props) => (props.isFilled ? "#03e3fc" : "none")};
    background-color: ${(props) => (props.isChosen ? "#03e3fc" : "none")};
  }
`;

export const TextContainer = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
export const OptionDataContainer = styled.div<{
  isInputBox: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: calc(100% - 30px);

  @media ${device.mobile} {
    justify-content: ${(props) =>
      !props.isInputBox ? "flex-start" : "center"};
    align-items: center;
  }
`;
export default StyledOption;
