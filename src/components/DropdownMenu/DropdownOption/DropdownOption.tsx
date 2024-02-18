import StyledOption, { TextContainer } from "./DropdownOption.styles";
import DownArrowIcon from "../../Icons/DownArrowIcon";
import { themeOption } from "./DropdownOption.types";
import { OptionDataContainer } from "./DropdownOption.styles";
import { SelectOptionType } from "../../../global-data";
import { IconWrapper } from "../../Container/IconContainer";
import useMobile from "../../../hooks/useMobile";
export const DropdownOption: React.FC<{
  value: SelectOptionType;
  isInputBox: boolean;
  handleClick: () => void;
  handleBlur?: () => void;
  theme: themeOption;
  disabled?: boolean;
}> = (props) => {
  const isMobile = useMobile();
  return (
    <StyledOption
      className="StyledOption"
      isInputBox={props.isInputBox}
      onMouseDown={props.handleClick}
      onBlur={props.handleBlur}
      theme={props.theme}
      disabled={props.disabled}
    >
      <OptionDataContainer className="OptionDataContainer">
        <TextContainer className="TextContainer">
          {props.value.title}
        </TextContainer>
        {props.isInputBox && !isMobile && (
          <IconWrapper>
            <DownArrowIcon />
          </IconWrapper>
        )}
      </OptionDataContainer>
    </StyledOption>
  );
};

export default DropdownOption;
