import styled from "styled-components";
import DownArrowIcon from "../../assets/svg/DownArrowIcon";
import THEMES, { StyledButtonProps } from "./DropdownOption.types";

const StyledOption = styled.button<StyledButtonProps>`
  width: ${(props) => THEMES.width(props.theme)};
  height: ${(props) => THEMES.height(props.theme)};
  border-radius: ${(props) => THEMES.borderRadius(props.theme)};
  margin-bottom: ${(props) => THEMES.marginBottom(props.theme)};
  background-color: ${(props) => THEMES.backgroundColor(props.theme)};
  font-family: ${(props) => THEMES.fontFamily(props.theme)};
  font-size: ${(props) => THEMES.fontSize(props.theme)};
  color: #5a5a89;
  padding: 15px;
  cursor: pointer;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  &:hover {
    background-color: ${(props) => THEMES.onHover(props.theme)};
  }
`;

export default StyledOption;
