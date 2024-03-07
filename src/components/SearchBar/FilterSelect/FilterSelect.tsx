import DropDownMenu, { DropDownProps } from "../../DropdownMenu/DropDownMenu";

const FilterSelect: React.FC<DropDownProps> = (props) => {
  return (
    <DropDownMenu
      defaultItemName={props.defaultItemName}
      itemsNames={props.itemsNames}
      selectedOption={props.selectedOption}
      handleSelectedOptionChange={props.handleSelectedOptionChange}
      theme="filter"
      disabled={props.disabled}
    />
  );
};

export default FilterSelect;
