import { FiltersToolbar } from "./FiltersLayout.styles";
import DropDownMenu from "../../../components/DropdownMenu/DropDownMenu";
import { modeArray, filterArray } from "./FilterLayout.types";
import { SelectOptionType } from "../../../global-data";
import { dataMock, noneOption } from "./FilterLayout.types";
import { useContext, useEffect, useState } from "react";
import {
  SearchContext,
  InputProvider,
} from "../../../components/SearchContext/SearchContext";
import SortDropdown from "../../../components/SortDropdown/SortDropdown";
import DatePicker from "../../../components/DatePicker/DatePicker";

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
  const { filterValue, filtersValues, updateFiltersValues } =
    useContext(SearchContext);

  const filters: SelectOptionType[] =
    filterValue.key == 0
      ? [filterArray[2], filterArray[3], filterArray[0]]
      : [filterArray[0], filterArray[1]];

  const [sourcesActive, setSourcesActive] = useState(false);
  const [filterActive, setFilterActive] = useState(false);

  const getFilter = (f: SelectOptionType) => {
    switch (f.value) {
      case "language":
        return {
          options: dataMock.language,
          chosenValue: filtersValues.language,
          updateValue: (newVal: any) => {
            updateFiltersValues("language", newVal);
            setFilterActive(newVal?.value != "none");
          },
        };
      case "category":
        return {
          options: dataMock.category,
          chosenValue: filtersValues.category,
          updateValue: (newVal: any) => {
            updateFiltersValues("category", newVal);
            setFilterActive(newVal?.value != "none");
          },
        };
      case "country":
        return {
          options: dataMock.country,
          chosenValue: filtersValues.country,
          updateValue: (newVal: any) => {
            updateFiltersValues("country", newVal);
            setFilterActive(newVal?.value != "none");
          },
        };
      case "sources":
        return {
          options: dataMock.sources,
          chosenValue: filtersValues.sources,
          updateValue: (newVal: any) => {
            updateFiltersValues("sources", newVal);
            setSourcesActive(newVal?.value != "none");
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

  return (
    <FiltersToolbar>
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
          disabled={f.value == "sources" ? filterActive : sourcesActive}
        />
      ))}
    </FiltersToolbar>
  );
};

export default FiltersLayout;
