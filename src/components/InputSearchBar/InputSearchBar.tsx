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
