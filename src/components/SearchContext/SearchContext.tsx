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
import { filtersDictType } from "../../hooks/useDict";

type SearchContextType = {
  isOpenRecent: boolean;
  toggleRecentSearchesMenu: () => void;
  filterValue: SelectOptionType;
  handleFilterChange: (value: SelectOptionType) => void;
  isSourcesActive: boolean;
  updateSourceActiveness: (isActive: boolean) => void;
  isSomeFilterActive: boolean;
  updateSomeFilterActiveness: (
    filterName: "category" | "country" | "language",
    isActive: boolean
  ) => void;
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
  userCountry: SelectOptionType;
  updateUserCountry: (country: SelectOptionType) => void;
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
  isSourcesActive: false,
  updateSourceActiveness: () => {},
  isSomeFilterActive: false,
  updateSomeFilterActiveness: () => {},
  sortMode: sortModesArrays[0],
  updateSortMode: () => {},
  datesRange: [],
  updateDatesRange: () => {},
  sendRequest: () => {},
  sources: [],
  updateSources: () => {},
  errorMsg: "",
  userCountry: noneOption,
  updateUserCountry: (countryCode: SelectOptionType) => {},
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
    country: DATA_OPTIONS.country[23],
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

  const [isSourcesActive, setIsSourcesActive] = useState(false);
  const [isSomeFilterActive, setIsSomeFilterActive] = useState(true);
  const [userCountry, setUserCountry] = useState<SelectOptionType>(noneOption);

  const updateSourceActiveness = (isActive: boolean) =>
    setIsSourcesActive(isActive);

  const updateSomeFilterActiveness = (
    filterName: "category" | "country" | "language",
    isActive: boolean
  ) => {
    const filters = filtersDict as filtersDictType;
    const newIsActive = isActive;
    const categoryIsActive = filters["category"].value != "none";
    const languageIsActive = filters["language"].value != "none";
    const countryIsActive = filters["country"].value != "none";
    const cond =
      filterName == "category"
        ? newIsActive || languageIsActive || countryIsActive
        : filterName == "country"
        ? newIsActive || languageIsActive || categoryIsActive
        : newIsActive || countryIsActive || categoryIsActive;

    // console.log("category", categoryIsActive);
    // console.log("lang", languageIsActive);
    // console.log("country", countryIsActive);
    // console.log(filterName, isActive);
    // console.log("final cond", cond);
    setIsSomeFilterActive(cond);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchValue(event.target.value);
  };

  const resetFilters = () => {
    updateFiltersDict("category", noneOption);
    updateFiltersDict("country", noneOption);
    updateFiltersDict("sources", noneOption);
    updateFiltersDict("language", noneOption);
    setSearchValue("");
    setSearchValueCopy("");
    updateSourceActiveness(false);
    setIsSomeFilterActive(false);
  };
  const handleFilterChange = (event: SelectOptionType) => {
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
    if (text && !items.includes(text)) {
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
    resetFilters();
    setSearchValue(text);
    setSearchValueCopy(text);
    toggleRecentSearchesMenu();
  };
  const toggleRecentSearchesMenu = () => {
    setIsOpenRecent((isOpen) => !isOpen);
  };
  const handleDelete = (text: string) => {
    const newItems = [...items].filter((item) => item !== text);
    updateLocalStorage(newItems);
  };
  const handleClick = (item: string) => {
    setSearchValue(item);
    sendRequest(item);
  };

  const handleClear = () => {
    updateLocalStorage([]);
  };

  const updateSources = (newSources: SelectOptionType[]) => {
    setSources([...newSources]);
  };

  // useEffect(() => {
  //   axios.get('https://ipapi.co/json/').then((response) => {
  //     const data = response.data;
  //     setUserCountry()
  //     this.setState({
  //         countryName: data.country_name,
  //         countryCode: data.country_calling_code
  //     });
  // }).catch((error) => {
  //     console.log(error);
  // });
  // }, [])
  const updateUserCountry = (country: SelectOptionType) => {
    setUserCountry(country);
  };
  const SearchData: SearchContextType = {
    isOpenRecent,
    toggleRecentSearchesMenu,
    filterValue,
    handleFilterChange,
    searchValue,
    searchValueCopy,
    handleSearchInputChange,
    isSourcesActive,
    updateSourceActiveness,
    isSomeFilterActive,
    updateSomeFilterActiveness,
    items,
    handleClick,
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
    userCountry,
    updateUserCountry,
  };

  return (
    <SearchContext.Provider value={SearchData}>
      {props.children}
    </SearchContext.Provider>
  );
};
export const useSearchContext = () => useContext(SearchContext);
