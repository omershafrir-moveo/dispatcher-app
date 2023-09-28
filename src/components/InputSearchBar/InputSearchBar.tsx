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

  const { isOpenRecent } = useContext(SearchContext);
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
