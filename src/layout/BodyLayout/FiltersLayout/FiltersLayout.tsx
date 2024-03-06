import { FiltersToolbar } from "./FiltersLayout.styles";
import DropDownMenu from "../../../components/DropdownMenu/DropDownMenu";
import { FiltersBySearchMode, SelectOptionType } from "../../../global-data";
import { DATA_OPTIONS, noneOption, filterArray } from "../../../global-data";
import { useContext, useState } from "react";
import { SearchContext } from "../../../components/SearchContext/SearchContext";
import SortDropdown from "../../../components/SortDropdown/SortDropdown";
import DatePicker from "../../../components/DatePicker/DatePicker";
import useViewport, { Viewport } from "../../../hooks/useViewport";

export type filtersValuesType = {
  country?: SelectOptionType;
  category?: SelectOptionType;
  sources?: SelectOptionType;
  language?: SelectOptionType;
};

export type FiltersLayoutProps = {
  mode: SelectOptionType;
};

const FiltersLayout: React.FC<FiltersLayoutProps> = (props) => {
  const {
    filterValue,
    filtersValues,
    updateFiltersValues,
    sources,
    isSourcesActive,
    isSomeFilterActive,
    updateSomeFilterActiveness,
    updateSourceActiveness,
  } = useContext(SearchContext);

  const filters = FiltersBySearchMode(filterValue);
  const getFilter = (f: SelectOptionType) => {
    switch (f.value) {
      case "language":
        return {
          options: DATA_OPTIONS.language,
          chosenValue: filtersValues.language,
          updateValue: (newVal: any) => {
            updateFiltersValues("language", newVal);
            updateSomeFilterActiveness("language", newVal?.value != "none");
          },
        };
      case "category":
        return {
          options: DATA_OPTIONS.category,
          chosenValue: filtersValues.category,
          updateValue: (newVal: any) => {
            updateFiltersValues("category", newVal);
            updateSomeFilterActiveness("category", newVal?.value != "none");
          },
        };
      case "country":
        return {
          options: DATA_OPTIONS.country,
          chosenValue: filtersValues.country,
          updateValue: (newVal: any) => {
            updateFiltersValues("country", newVal);
            updateSomeFilterActiveness("country", newVal?.value != "none");
          },
        };
      case "sources":
        return {
          options: sources,
          chosenValue: filtersValues.sources,
          updateValue: (newVal: any) => {
            updateFiltersValues("sources", newVal);
            updateSourceActiveness(newVal?.value != "none");
          },
        };
      default:
        return {
          options: [],
          chosenValue: noneOption,
          updateValue: (newVal: any) => {},
        };
    }
  };
  const vp = useViewport();
  return (
    <FiltersToolbar className="FiltersToolbar">
      {filterValue.key == 1 && <SortDropdown />}
      {filterValue.key == 1 && <DatePicker />}
      {filters.map((f: SelectOptionType, index: number) => (
        <DropDownMenu
          defaultItemName={f}
          handleSelectedOptionChange={(option) => {
            getFilter(f).updateValue(option);
          }}
          itemsNames={getFilter(f).options}
          selectedOption={getFilter(f).chosenValue as SelectOptionType}
          theme="default"
          key={index}
          disabled={f.value == "sources" ? isSomeFilterActive : isSourcesActive}
        />
      ))}
    </FiltersToolbar>
  );
};

export default FiltersLayout;
