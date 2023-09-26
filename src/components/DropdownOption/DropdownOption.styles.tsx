import styled from "styled-components";
import DownArrowIcon from "../Icons/DownArrowIcon";
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
  border-left: 0.5px solid #D9DBE9;
  /* border-image: linear-gradient(to top, #FFF 10%, #000 , #FFF 90%); to top - at 50% transparent */
  /* border-image-slice: 1; */

  /* &::before {
    content: "";
    border-left: 1px solid grey;
    display: block;
    padding-top: 35px;
    padding-left: 15px;
    margin: 0 auto;
  } */
  &:hover {
    background-color: ${(props) => THEMES.onHover(props.theme)};
  }
`;

export default StyledOption;
