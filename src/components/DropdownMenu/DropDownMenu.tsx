import React, { useState } from "react";
import { SelectOptionType } from "../../global-data";

import DropdownOption from "../DropdownOption/DropdownOption";
import { StyledMenu } from "./DropDownMenu.styles";
import DropDownMenuContainer from "../Container/DropDownMenuContainer/DropDownMenuContainer";
import ItemsListContainer from "../Container/ItemsListContainer/ItemsListContainer";

export type DropDownProps = {
  defaultItemName: SelectOptionType;
  itemsNames: SelectOptionType[];
  selectedOption: SelectOptionType;
  handleSelectedOptionChange: (option: SelectOptionType) => void;
  theme: string;
};

const DropDownMenu: React.FC<DropDownProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const onInputBoxClick = () => {
    setIsOpen(!isOpen);
  };
  const onOptionClick = (item: SelectOptionType) => {
    setIsOpen(false);
    setIsActive(true);
    props.handleSelectedOptionChange(item);
  };

  const handleBlur = () => {
    // adding timeout of 100 ms to prevent behaviour where onBlur handler of input box fired before onClick handler of option box,
    // resulting in behaviour where drop down  is practically closed before the onClick is fired, and therefore not working
    setTimeout(() => {
      if (isOpen) setIsOpen(false);
    }, 100);
  };

  // on first render shlould be 'defaultItemName', after change should be state value
  const inputOptionValue = isActive
    ? props.selectedOption
    : props.defaultItemName;

  return (
    <DropDownMenuContainer>
      <DropdownOption
        value={inputOptionValue}
        isInputBox={true}
        handleClick={onInputBoxClick}
        handleBlur={handleBlur}
        theme={
          props.theme === "default" ? "defaultInputOption" : "filterInputOption"
        }
      />
      {isOpen && (
        <ItemsListContainer>
          <StyledMenu>
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
              />
            ))}
          </StyledMenu>
        </ItemsListContainer>
      )}
    </DropDownMenuContainer>
  );
};

export default DropDownMenu;
