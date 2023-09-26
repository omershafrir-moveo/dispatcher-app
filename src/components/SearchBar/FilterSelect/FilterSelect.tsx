import DropDownMenu, { DropDownProps } from "../../DropdownMenu/DropDownMenu";


const FilterSelect: React.FC<DropDownProps> = (props) => {
  return (
    <DropDownMenu
      defaultItemName="Top Headlines"
      itemsNames={["Top Headlines", "Everything"]}
      selectedOption={props.selectedOption}
      handleSelectedOptionChange={props.handleSelectedOptionChange}
      theme="filter"
    />
  );
};

export default FilterSelect;
