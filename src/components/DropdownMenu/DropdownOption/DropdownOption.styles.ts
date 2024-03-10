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
  &:disabled::before {
    display: none;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #505050;
    color: white;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    top: 60px;
    left: -10px;
    width: 200px;
    height: 60px;
    content: attr(data-tooltip);
    transition: all 0.2s;
    opacity: 0;

    @media ${device.tablet} {
      display: none;
    }
  }
  &:disabled:hover::before {
    display: flex;
    opacity: 1;
  }

  @media ${device.desktop} {
    ::before {
      display: ${({ theme }) =>
        theme == "filterInputOption" ? "block" : "none"};
      content: "";
      position: absolute;
      background-color: #d9dbe9;
      top: 10;
      height: 80%;
      justify-self: center;
      left: 0;
      width: 1px; /* Width of the floating line */
      z-index: 30;
      opacity: 50%;
    }
  }

  @media ${device.tablet} {
    text-align: center;
    font-size: 13px;
    box-shadow: ${(props) =>
      ["defaultInputOption", "filterInputOption"].includes(props.theme) &&
      !props.disabled
        ? "0 2px 4px rgba(0, 0, 0, 0.2)"
        : "none"};
    border-radius: ${(props) =>
      ["defaultInputOption", "filterInputOption"].includes(props.theme)
        ? "10px"
        : "none"};
  }

  @media ${device.mobile} {
    text-align: center;
    justify-content: center;
    box-shadow: ${(props) =>
      props.theme == "filterInputOption" ? "none" : "auto"};
    font-size: 12px;
    background-color: ${(props) => (props.isFilled ? "#03e3fc" : "none")};
    background-color: ${(props) => (props.isChosen ? "#03e3fc" : "none")};
    width: ${(props) =>
      props.theme == "filterInputOption" ? "180px" : "none"};
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

export const TooltipText = styled.span<{
  isVisible: boolean;
}>`
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  width: 120px;
  background-color: black;
  color: white;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  top: 40px;
  left: 0;
  margin-left: -60px;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.3s;
`;

export default StyledOption;
