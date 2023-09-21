import DropdownOption from "../DropdownOption/DropdownOption";
import { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { StyledMenu } from "./DropDownMenu.styles";
import { Container } from "../Container/Container.style";

type DropDownProps = {
  defaultItemName: string;
  itemsNames: string[];
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
};

const DropDownMenu: React.FC<DropDownProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Sources");

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
      />
      {isOpen && (
        <Container containerType="itemsList">
          <StyledMenu numOfItems={props.itemsNames.length}>
            {props.itemsNames.map((item, index) => (
              <DropdownOption
                key={index}
                value={item}
                isInputBox={false}
                handleClick={() => {
                  onOptionClick(item);
                }}
              />
            ))}
          </StyledMenu>
        </Container>
      )}
    </Container>
  );
};

export default DropDownMenu;
