import DropdownOption from "../DropdownOption/DropdownOption";
import { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { StyledMenu } from "./DropDownMenu.styles";
import { Container } from "../Container/Container.style";
import { themeOption } from "../DropdownOption/DropdownOption.types";

export type DropDownProps = {
  defaultItemName: string;
  itemsNames: string[];
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
  theme: string;
};

const DropDownMenu: React.FC<DropDownProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(props.defaultItemName);

  const onInputBoxClick = () => {
    setIsOpen(!isOpen);
  };
  const onOptionClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <Container containerType="dropdownMenu">
      <DropdownOption
        value={selectedItem}
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
