import React , { useState } from "react";
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

  const onInputBoxClick = () => {
    setIsOpen(!isOpen);
  };
  const onOptionClick = (item: SelectOptionType) => {
    setIsOpen(false);
    props.handleSelectedOptionChange(item);
  };

  return (
    <DropDownMenuContainer>
      <DropdownOption
        value={props.selectedOption.title != "" ? props.selectedOption : props.defaultItemName}
        isInputBox={true}
        handleClick={onInputBoxClick}
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
