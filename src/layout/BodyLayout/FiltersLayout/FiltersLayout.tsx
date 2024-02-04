import { FiltersToolbar } from "./FiltersLayout.styles";
import DropDownMenu from "../../../components/DropdownMenu/DropDownMenu";
import { modeArray, filterArray } from "./FilterLayout.types";
import { SelectOptionType } from "../../../global-data";
import { dataMock, noneOption } from "./FilterLayout.types";
import { useState, useContext } from "react";
import {
  SearchContext,
  InputProvider,
} from "../../../components/SearchContext/SearchContext";
import SearchContextApi from "../../../api/SearchContextApi";

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
  const filters: SelectOptionType[] =
    props.mode.key == 1
      ? [filterArray[2], filterArray[3], filterArray[0]]
      : [filterArray[0], filterArray[1]];

  const { filtersValues, updateFiltersValues } = useContext(SearchContext);
  const getFilter = (f: SelectOptionType) => {
    switch (f.value) {
      case "language":
        return {
          options: dataMock.language,
          chosenValue: filtersValues.language,
          updateValue: (newVal: any) => updateFiltersValues("language", newVal),
        };
      case "category":
        console.log(`'filtersValues' value is:`, filtersValues);
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
        {filters.map((f: SelectOptionType, index: number) => (
          <DropDownMenu
            defaultItemName={f}
            handleSelectedOptionChange={(option) => {
              getFilter(f).updateValue(option);
              console.log(
                "click!",
                option
                // `'filtersValues' value is: ,${JSON.stringify(filtersValues)}`
              );
              console.log(
                `'filtersValues' value is: ,${JSON.stringify(filtersValues)}`
              );
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
