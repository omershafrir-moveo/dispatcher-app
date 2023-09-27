import StyledOption from "./DropdownOption.styles";
import DownArrowIcon from "../Icons/DownArrowIcon";
import { themeOption } from "./DropdownOption.types";
import { SelectOptionType } from "../../global-data";

export const DropdownOption: React.FC<{
  value: SelectOptionType;
  isInputBox: boolean;
  handleClick: () => void;
  theme: themeOption;
}> = (props) => {
  return (
    <StyledOption
      isInputBox={props.isInputBox}
      onClick={props.handleClick}
      theme={props.theme}
    >
      {props.value.title}
      {props.isInputBox && <DownArrowIcon />}
    </StyledOption>
  );
};

export default DropdownOption;
