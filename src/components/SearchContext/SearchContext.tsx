import React, { createContext, useEffect, useState } from "react";
import { SelectOptionType } from "../../global-data";
import { filtersValuesType } from "../../layout/BodyLayout/FiltersLayout/FiltersLayout";
import {
  noneOption,
  yesOption,
} from "../../layout/BodyLayout/FiltersLayout/FilterLayout.types";
import useDict from "../../hooks/useDict";
import { sortModesArrays } from "../../layout/BodyLayout/FiltersLayout/FilterLayout.types";
import { dictToArray, toJson } from "../../util/util";

type SearchContextType = {
  isOpenRecent: boolean;
  toggleRecentSearchesMenu: () => void;
  filterValue: SelectOptionType;
  handleFilterChange: (value: SelectOptionType) => void;
  searchValue: string;
  handleSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  items: string[];
  handleClick: (item: string) => void;
  handleDelete: (item: string) => void;
  handleClear: () => void;
  filtersValues: filtersValuesType;
  updateFiltersValues: (key: string, value: SelectOptionType) => void;
  sortMode: SelectOptionType;
  updateSortMode: (newSortMode: SelectOptionType) => void;
  datesRange: Date[];
  updateDatesRange: (newRange: Date[]) => void;
  sendRequest: (text: string) => void;
};
const ContextInitalValue: SearchContextType = {
  isOpenRecent: false,
  toggleRecentSearchesMenu: () => {},
  filterValue: { key: 0, title: "Top Headlines", value: "top" },
  handleFilterChange: (value) => {},
  searchValue: "",
  handleSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => {},
  items: [],
  handleClick: (item: string) => {},
  handleDelete: (item: string) => {},
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
  sendRequest: () => {},
};

export const SearchContext =
  createContext<SearchContextType>(ContextInitalValue);

export type SearchContextProps = {
  children?: React.ReactNode;
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
    setFilterValue({ ...event });
  };

  const [items, setItems] = useState<string[]>([]);

  const fetchRecentSearches = (): void => {
    if (!localStorage.getItem("recentSearches"))
      localStorage.setItem("recentSearches", JSON.stringify({}));
    const data = localStorage.getItem("recentSearches") as string;
    const dataDict = JSON.parse(data);
    setItems(Object.values(dataDict));
  };

  useEffect(() => {
    fetchRecentSearches();
  }, []);

  const updateLocalStorage = (newItems: string[]) => {
    localStorage.setItem("recentSearches", JSON.stringify(toJson(newItems)));
    setItems(newItems);
  };
  const sendRequest = (text: string) => {
    const newItems = [...items, text];
    updateLocalStorage(newItems);
  };
  const toggleRecentSearchesMenu = () => {
    setIsOpenRecent((isOpen) => !isOpen);
  };
  const handleDelete = (text: string) => {
    const newItems = [...items].filter((item) => item !== text);
    updateLocalStorage(newItems);
  };

  const handleClear = () => {
    updateLocalStorage([]);
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
      setSearchValue(item);
    },
    handleDelete,
    handleClear,
    filtersValues: filtersDict,
    updateFiltersValues: updateFiltersDict,
    sortMode: sortMode,
    updateSortMode: (newSortMode: SelectOptionType) =>
      setSortMode({ ...newSortMode }),
    datesRange: datesRange,
    updateDatesRange: updateDatesRange,
    sendRequest,
  };

  return (
    <SearchContext.Provider value={SearchData}>
      {props.children}
    </SearchContext.Provider>
  );
};
