import React, { createContext, useEffect, useState } from "react";
import { SelectOptionType } from "../../global-data";
import { RecentSearchesItem } from "../RecentSearches/RecentSearchesMenu/RecentSearchesMenu";
import { filtersValuesType } from "../../layout/BodyLayout/FiltersLayout/FiltersLayout";
import {
  noneOption,
  yesOption,
} from "../../layout/BodyLayout/FiltersLayout/FilterLayout.types";
import useDict from "../../hooks/useDict";
import { sortModesArrays } from "../../layout/BodyLayout/FiltersLayout/FilterLayout.types";

type SearchContextType = {
  isOpenRecent: boolean;
  toggleRecentSearchesMenu: () => void;
  filterValue: SelectOptionType;
  handleFilterChange: (value: SelectOptionType) => void;
  searchValue: string;
  handleSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  items: RecentSearchesItem[];
  handleClick: (item: RecentSearchesItem) => void;
  handleDelete: (item: RecentSearchesItem) => void;
  handleClear: () => void;
  filtersValues: filtersValuesType;
  updateFiltersValues: (key: string, value: SelectOptionType) => void;
  sortMode: SelectOptionType;
  updateSortMode: (newSortMode: SelectOptionType) => void;
  datesRange: Date[];
  updateDatesRange: (newRange: Date[]) => void;
};
const ContextInitalValue: SearchContextType = {
  isOpenRecent: false,
  toggleRecentSearchesMenu: () => {},
  filterValue: { key: 0, title: "Top Headlines", value: "top" },
  handleFilterChange: (value) => {},
  searchValue: "",
  handleSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => {},
  items: [],
  handleClick: (item: RecentSearchesItem) => {},
  handleDelete: (item: RecentSearchesItem) => {},
  handleClear: () => {},
  filtersValues: {
    category: noneOption,
    country: yesOption,
    language: noneOption,
    sources: noneOption,
  },
  updateFiltersValues: (key, value) => {},
  sortMode: sortModesArrays[0],
  updateSortMode: () => {},
  datesRange: [],
  updateDatesRange: () => {},
};

export const SearchContext =
  createContext<SearchContextType>(ContextInitalValue);

export type SearchContextProps = {
  children?: React.ReactNode;
  userInputAPI: {
    handleClick: (item: RecentSearchesItem) => void;
    handleDelete: (item: RecentSearchesItem) => void;
    handleClear: () => void;
  };
};

export const InputProvider: React.FC<SearchContextProps> = (props) => {
  const [isOpenRecent, setIsOpenRecent] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState<SelectOptionType>({
    key: 0,
    title: "Top Headlines",
    value: "top",
  });
  const [filtersDict, updateFiltersDict] = useDict({
    category: noneOption,
    country: noneOption,
    language: noneOption,
    sources: noneOption,
  });
  const [sortMode, setSortMode] = useState<SelectOptionType>(
    sortModesArrays[0]
  );
  const [datesRange, setDatesRange] = useState<Date[]>([]);
  const updateDatesRange = (newDatesRange: Date[]) => {
    if (newDatesRange) setDatesRange([...newDatesRange]);
    else setDatesRange([]);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchValue(event.target.value);
  };

  const handleFilterChange = (event: SelectOptionType) => {
    console.log("Print!");

    setFilterValue({ ...event });
    console.log(`'filterValue' value is: ,${JSON.stringify(filterValue)}`);
  };

  const [items, setItems] = useState<RecentSearchesItem[]>([]);

  const toggleRecentSearchesMenu = () => {
    setIsOpenRecent((isOpen) => !isOpen);
  };

  const SearchData: SearchContextType = {
    isOpenRecent,
    toggleRecentSearchesMenu,
    filterValue,
    handleFilterChange,
    searchValue,
    handleSearchInputChange,
    items,
    handleClick: (item) => {
      setSearchValue(item.text);
    },
    // handleClick: props.userInputAPI.handleClick,
    handleDelete: props.userInputAPI.handleDelete,
    handleClear: props.userInputAPI.handleClear,
    filtersValues: filtersDict,
    updateFiltersValues: updateFiltersDict,
    sortMode: sortMode,
    updateSortMode: (newSortMode: SelectOptionType) =>
      setSortMode({ ...newSortMode }),
    datesRange: datesRange,
    updateDatesRange: updateDatesRange,
  };

  return (
    <SearchContext.Provider value={SearchData}>
      {props.children}
    </SearchContext.Provider>
  );
};
