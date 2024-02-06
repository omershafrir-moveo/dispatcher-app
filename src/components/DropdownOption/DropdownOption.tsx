import StyledOption from "./DropdownOption.styles";
import DownArrowIcon from "../Icons/DownArrowIcon";
import { themeOption } from "./DropdownOption.types";
import { SelectOptionType } from "../../global-data";

export const DropdownOption: React.FC<{
  value: SelectOptionType;
  isInputBox: boolean;
  handleClick: () => void;
  handleBlur?: () => void;
  theme: themeOption;
}> = (props) => {
  return (
    <StyledOption
      isInputBox={props.isInputBox}
      onMouseDown={props.handleClick}
      onBlur={props.handleBlur}
      theme={props.theme}
    >
      {props.value.title}
      {props.isInputBox && <DownArrowIcon />}
    </StyledOption>
  );
};

export default DropdownOption;
