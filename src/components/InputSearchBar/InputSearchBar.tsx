import SearchBar from "../SearchBar/SearchBar/SearchBar";
import RecentSearchesMenu from "../RecentSearches/RecentSearchesMenu/RecentSearchesMenu";
import { Container, Spacer } from "./InputSearchBar.styles";
import { useState, useContext } from "react";
import { SelectOptionType } from "../../global-data";
import { SearchBarProps } from "../SearchBar/SearchBar/SearchBar";
import { RecentSearchesMenuProps } from "../RecentSearches/RecentSearchesMenu/RecentSearchesMenu";
import { RecentSearchesItem } from "../RecentSearches/RecentSearchesMenu/RecentSearchesMenu";
import { SearchContext } from "../SearchContext/SearchContext";

const InputSearchBar = () => {
  const {
    isOpenRecent,
    filterValue,
    handleFilterChange,
    searchValue,
    handleSearchInputChange,
    items,
    handleClick,
    handleDelete,
    handleClear,
  } = useContext(SearchContext);

  return (
    <Container>
      <SearchBar
        filterValue={filterValue}
        handleFilterChange={handleFilterChange}
        searchValue={searchValue}
        handleSearchInputChange={handleSearchInputChange}
      />
      <Spacer />
      {isOpenRecent && (
        <RecentSearchesMenu
          isOpen={isOpenRecent}
          items={items}
          handleClick={handleClick}
          handleDelete={handleDelete}
          handleClear={handleClear}
        />
      )}
    </Container>
  );
};

export default InputSearchBar;

/***
 possible scenarious:
 1: user clicks on searchBox:
  1.1: there are recent searches: => recent searches dropdown shows
  1.2: there arent recent searches: => nothing.
 
 2: user click on filter:
  2.1: recent searches is opened: recent searches closes, filter opens
  2.2: recent searches is closed: filter opens

 */
