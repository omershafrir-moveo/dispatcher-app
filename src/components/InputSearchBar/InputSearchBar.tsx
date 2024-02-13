import SearchBar from "../SearchBar/SearchBar/SearchBar";
import RecentSearchesMenu from "./RecentSearches/RecentSearchesMenu/RecentSearchesMenu";
import { SearchBarWrapper } from "./InputSearchBar.styles";
import { useContext } from "react";
import { SearchContext } from "../SearchContext/SearchContext";
import { RecentSearchesItem } from "./RecentSearches/RecentSearchesMenu/RecentSearchesMenu";

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
    <SearchBarWrapper className="SearchBarWrapper">
      <SearchBar
        filterValue={filterValue}
        handleFilterChange={handleFilterChange}
        searchValue={searchValue}
        handleSearchInputChange={handleSearchInputChange}
      />
      {isOpenRecent && items.length > 0 && (
        <RecentSearchesMenu
          isOpen={isOpenRecent}
          items={items}
          handleClick={handleClick}
          handleClear={handleClear}
          handleDelete={handleDelete}
        />
      )}
    </SearchBarWrapper>
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
