import StyledOption from "./DropdownOption.styles";
import DownArrowIcon from "../Icons/DownArrowIcon";
import { themeOption } from "./DropdownOption.types";

export const DropdownOption: React.FC<{
  value: string;
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
      {props.value}
      {props.isInputBox && <DownArrowIcon />}
    </StyledOption>
  );
};

export default DropdownOption;
