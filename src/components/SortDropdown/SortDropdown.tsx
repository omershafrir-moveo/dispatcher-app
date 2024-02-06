import DropDownMenu from "../DropdownMenu/DropDownMenu";
import { sortModesArrays } from "../../layout/BodyLayout/FiltersLayout/FilterLayout.types";
import { useContext } from "react";
import { SearchContext } from "../SearchContext/SearchContext";

const SortDropdown = () => {
  const { sortMode, updateSortMode } = useContext(SearchContext);
  return (
    <DropDownMenu
      defaultItemName={{ key: -1, title: "Sort By", value: "sortBy" }}
      handleSelectedOptionChange={updateSortMode}
      itemsNames={sortModesArrays}
      selectedOption={sortMode}
      theme="default"
      disabled={false}
    />
  );
};

export default SortDropdown;
