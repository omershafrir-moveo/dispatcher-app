import React, { createContext, useContext, useState } from "react";
import { SelectOptionType } from "../../global-data";
import { SearchBarProps } from "../SearchBar/SearchBar/SearchBar";
import { RecentSearchesMenuProps } from "../RecentSearches/RecentSearchesMenu/RecentSearchesMenu";
import { RecentSearchesItem } from "../RecentSearches/RecentSearchesMenu/RecentSearchesMenu";

type SearchContextType = {
  isOpenRecent: boolean;
  isOpenFilter: boolean;
  toggleRecentSearchesMenu: () => void;
  toggleFilterMenu: () => void;
};
const ContextInitalValue: SearchContextType = {
  isOpenRecent: false,
  isOpenFilter: false,
  toggleRecentSearchesMenu: () => {},
  toggleFilterMenu: () => {},
};

export const SearchContext =
  createContext<SearchContextType>(ContextInitalValue);

export const InputProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpenRecent, setIsOpenRecent] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [searchValue, setSearchValue] = useState("Search");
  const [filterValue, setFilterValue] = useState<SelectOptionType>({
    key: 0,
    title: "Top Headlines",
    value: "top",
  });

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {};

  const handleFilterChange = (event: SelectOptionType) => {};

  const [items, setItems] = useState([]);
  const handleClick = (item: RecentSearchesItem) => {};
  const handleDelete = (item: RecentSearchesItem) => {};
  const handleClear = () => {};
  const toggleRecentSearchesMenu = () => {
    setIsOpenRecent((isOpen) => !isOpen);
  };
  const toggleFilterMenu = () => {
    setIsOpenFilter((isOpen) => !isOpen);
  };

  const SearchData: SearchContextType = {
    isOpenRecent,
    isOpenFilter,
    toggleRecentSearchesMenu,
    toggleFilterMenu,
  };

  return (
    <SearchContext.Provider value={SearchData}>
      {children}
    </SearchContext.Provider>
  );
};
