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
  disabled?: boolean;
}> = (props) => {
  return (
    <StyledOption
      isInputBox={props.isInputBox}
      onMouseDown={props.handleClick}
      onBlur={props.handleBlur}
      theme={props.theme}
      disabled={props.disabled}
    >
      {props.value.title}
      {props.isInputBox && <DownArrowIcon />}
    </StyledOption>
  );
};

export default DropdownOption;
