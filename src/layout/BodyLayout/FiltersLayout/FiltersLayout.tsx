import { FiltersToolbar } from "./FiltersLayout.styles";
import DropDownMenu from "../../../components/DropdownMenu/DropDownMenu";
import { modeArray, filterArray } from "./FilterLayout.types";
import { SelectOptionType } from "../../../global-data";
import { dataMock, noneOption } from "./FilterLayout.types";
import { useContext, useEffect } from "react";
import {
  SearchContext,
  InputProvider,
} from "../../../components/SearchContext/SearchContext";
import SearchContextApi from "../../../api/SearchContextApi";
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
    filterValue.key == 1
      ? [filterArray[2], filterArray[3], filterArray[0]]
      : [filterArray[0], filterArray[1]];

  const getFilter = (f: SelectOptionType) => {
    switch (f.value) {
      case "language":
        return {
          options: dataMock.language,
          chosenValue: filtersValues.language,
          updateValue: (newVal: any) => updateFiltersValues("language", newVal),
        };
      case "category":
        return {
          options: dataMock.category,
          chosenValue: filtersValues.category,
          updateValue: (newVal: any) => updateFiltersValues("category", newVal),
        };
      case "country":
        return {
          options: dataMock.country,
          chosenValue: filtersValues.country,
          updateValue: (newVal: any) => updateFiltersValues("country", newVal),
        };
      case "sources":
        return {
          options: dataMock.sources,
          chosenValue: filtersValues.sources,
          updateValue: (newVal: any) => updateFiltersValues("sources", newVal),
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
    <InputProvider userInputAPI={SearchContextApi}>
      <FiltersToolbar>
        <SortDropdown />
        <DatePicker />
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
          />
        ))}
      </FiltersToolbar>
    </InputProvider>
  );
};

export default FiltersLayout;
