import React, { useState } from "react";
import { SelectOptionType } from "../../global-data";

import DropdownOption from "./DropdownOption/DropdownOption";
import { StyledMenu } from "./DropDownMenu.styles";
import { DropDownMenuContainer } from "./DropDownMenu.styles";
import { ItemsListContainer } from "./DropDownMenu.styles";

export type DropDownProps = {
  defaultItemName: SelectOptionType;
  itemsNames: SelectOptionType[];
  selectedOption: SelectOptionType;
  handleSelectedOptionChange: (option: SelectOptionType) => void;
  theme: string;
  disabled: boolean;
};

const DropDownMenu: React.FC<DropDownProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onInputBoxClick = () => {
    setIsOpen(!isOpen);
  };
  const onOptionClick = (item: SelectOptionType) => {
    setIsOpen(false);
    props.handleSelectedOptionChange(item);
  };

  const handleBlur = () => {
    if (isOpen) setIsOpen(false);
  };

  const inputOptionValue =
    props.selectedOption.value == "none"
      ? props.defaultItemName
      : props.selectedOption;

  return (
    <DropDownMenuContainer className="DropDownMenuContainer">
      <DropdownOption
        value={inputOptionValue}
        isInputBox={true}
        handleClick={onInputBoxClick}
        handleBlur={handleBlur}
        theme={
          props.theme === "default" ? "defaultInputOption" : "filterInputOption"
        }
        disabled={props.disabled}
      />
      {isOpen && (
        <ItemsListContainer className="ItemsListContainer">
          <StyledMenu className="styledMenu">
            {props.itemsNames.map((item, index) => (
              <DropdownOption
                key={index}
                value={item}
                isInputBox={false}
                handleClick={() => {
                  onOptionClick(item);
                }}
                handleBlur={handleBlur}
                theme={
                  props.theme === "default" ? "defaultOption" : "filterOption"
                }
                disabled={props.disabled}
              />
            ))}
          </StyledMenu>
        </ItemsListContainer>
      )}
    </DropDownMenuContainer>
  );
};

export default DropDownMenu;
