import React, { createContext, useContext, useEffect, useState } from "react";
import { SelectOptionType } from "../../global-data";
import { filtersValuesType } from "../../layout/BodyLayout/FiltersLayout/FiltersLayout";
import {
  DATA_OPTIONS,
  modeArray,
  noneOption,
  sortModesArrays,
} from "../../global-data";
import useDict from "../../hooks/useDict";
import { toJson } from "../../util/util";
import { getParams, validateParams } from "../../util/apiService";
import useViewport, { Viewport } from "../../hooks/useViewport";
type SearchContextType = {
  isOpenRecent: boolean;
  toggleRecentSearchesMenu: () => void;
  filterValue: SelectOptionType;
  handleFilterChange: (value: SelectOptionType) => void;
  searchValue: string;
  searchValueCopy: string;
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
  sources: SelectOptionType[];
  updateSources: (sources: SelectOptionType[]) => void;
  errorMsg: string;
};

const ContextInitalValue: SearchContextType = {
  isOpenRecent: false,
  toggleRecentSearchesMenu: () => {},
  filterValue: { key: 0, title: "Top Headlines", value: "top" },
  handleFilterChange: (value) => {},
  searchValue: "",
  searchValueCopy: "",
  handleSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => {},
  items: [],
  handleClick: (item: string) => {},
  handleDelete: (item: string) => {},
  handleClear: () => {},
  filtersValues: {
    category: noneOption,
    country: noneOption,
    language: noneOption,
    sources: noneOption,
  },
  updateFiltersValues: (key, value) => {},
  sortMode: sortModesArrays[0],
  updateSortMode: () => {},
  datesRange: [],
  updateDatesRange: () => {},
  sendRequest: () => {},
  sources: [],
  updateSources: () => {},
  errorMsg: "",
};

export const SearchContext =
  createContext<SearchContextType>(ContextInitalValue);

export type SearchContextProps = {
  children?: React.ReactNode;
};

export const InputProvider: React.FC<SearchContextProps> = (props) => {
  const vp = useViewport();
  const [isOpenRecent, setIsOpenRecent] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchValueCopy, setSearchValueCopy] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [sources, setSources] = useState<SelectOptionType[]>([]);
  const [filterValue, setFilterValue] = useState<SelectOptionType>(
    modeArray[0]
  );

  const [filtersDict, updateFiltersDict] = useDict({
    category: noneOption,
    country: DATA_OPTIONS.country[22],
    language: noneOption,
    sources: noneOption,
  });
  const [sortMode, setSortMode] = useState<SelectOptionType>(
    vp == Viewport.DESKTOP
      ? sortModesArrays[0]
      : { key: -1, title: "Sort By", value: "sort-by" }
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
    const resetFilters = () => {
      updateFiltersDict("category", noneOption);
      updateFiltersDict("country", noneOption);
      updateFiltersDict("sources", noneOption);
      updateFiltersDict("language", noneOption);
      setSearchValue("");
    };
    resetFilters();
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
    if (text) {
      const newItems = [...items, text];
      updateLocalStorage(newItems);
      const params = getParams(
        filterValue,
        filtersDict,
        searchValue,
        datesRange,
        sortMode
      );
      const error = validateParams(params);

      setErrorMsg(error);
    }
    setSearchValueCopy(text);
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

  const updateSources = (newSources: SelectOptionType[]) => {
    setSources([...newSources]);
  };

  const SearchData: SearchContextType = {
    isOpenRecent,
    toggleRecentSearchesMenu,
    filterValue,
    handleFilterChange,
    searchValue,
    searchValueCopy,
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
    sources,
    updateSources,
    errorMsg,
  };

  return (
    <SearchContext.Provider value={SearchData}>
      {props.children}
    </SearchContext.Provider>
  );
};
export const useSearchContext = () => useContext(SearchContext)
