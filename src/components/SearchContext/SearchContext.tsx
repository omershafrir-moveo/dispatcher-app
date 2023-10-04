import React, { createContext, useContext, useState } from "react";
import { SelectOptionType } from "../../global-data";
import { SearchBarProps } from "../SearchBar/SearchBar/SearchBar";
import { RecentSearchesMenuProps } from "../RecentSearches/RecentSearchesMenu/RecentSearchesMenu";
import { RecentSearchesItem } from "../RecentSearches/RecentSearchesMenu/RecentSearchesMenu";

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

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchValue(event.target.value);
  };

  const handleFilterChange = (event: SelectOptionType) => {
    setFilterValue(event);
  };

  const [items, setItems] = useState<RecentSearchesItem[]>([{key:1, text:"sdsds"}]);

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
    handleClick: props.userInputAPI.handleClick,
    handleDelete: props.userInputAPI.handleDelete,
    handleClear: props.userInputAPI.handleClear,
  };

  return (
    <SearchContext.Provider value={SearchData}>
      {props.children}
    </SearchContext.Provider>
  );
};
