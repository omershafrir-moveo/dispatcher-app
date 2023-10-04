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

export const InputProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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

  //TODO : connect with db and get items
  const [items, setItems] = useState([
    { key: 1, text: "recent1" },
    { key: 2, text: "recent2" },
    { key: 3, text: "recent3" },
  ]);
  const handleClick = (item: RecentSearchesItem) => {
    setSearchValue(item.text);
  };
  const handleDelete = (item: RecentSearchesItem) => {
    //TODO : connect with db and erase permanently the search item
    setItems((oldItems) =>
      oldItems.filter((oldItem: RecentSearchesItem) => oldItem.key !== item.key)
    );
  };
  const handleClear = () => {
    //TODO : connect with db and erase permanently the search items
    setItems([]);
  };

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
    handleClick,
    handleDelete,
    handleClear,
  };

  return (
    <SearchContext.Provider value={SearchData}>
      {children}
    </SearchContext.Provider>
  );
};
