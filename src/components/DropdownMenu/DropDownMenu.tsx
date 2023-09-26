import DropdownOption from "../DropdownOption/DropdownOption";
import { useState } from "react";
import { StyledMenu } from "./DropDownMenu.styles";
import Container from "../Container/Container";
import React from "react";

export type DropDownProps = {
  defaultItemName: string;
  itemsNames: string[];
  selectedOption: string;
  handleSelectedOptionChange: (option: string) => void;
  theme: string;
};

const DropDownMenu: React.FC<DropDownProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onInputBoxClick = () => {
    setIsOpen(!isOpen);
  };
  const onOptionClick = (item: string) => {
    setIsOpen(false);
    props.handleSelectedOptionChange(item);
  };

  return (
    <Container containerType="dropdownMenu">
      <DropdownOption
        value={props.selectedOption}
        isInputBox={true}
        handleClick={onInputBoxClick}
        theme={
          props.theme === "default" ? "defaultInputOption" : "filterInputOption"
        }
      />
      {isOpen && (
        <Container containerType="itemsList">
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
        </Container>
      )}
    </Container>
  );
};

export default DropDownMenu;
