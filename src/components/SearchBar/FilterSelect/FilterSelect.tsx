import DropDownMenu, { DropDownProps } from "../../DropdownMenu/DropDownMenu";
type FilterSelectProps = {};

const FilterSelect: React.FC<DropDownProps> = (props) => {
  return (
    <DropDownMenu
      defaultItemName="Top Headlines"
      itemsNames={["Top Headlines", "Everything"]}
      selectedOption="Top Headlines"
      setSelectedOption={props.setSelectedOption}
      theme="filter"
    />
  );
};

export default FilterSelect;
