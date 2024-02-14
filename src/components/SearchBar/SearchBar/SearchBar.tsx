import React from "react";
import { Container, SearchContainer } from "./SearchBar.styles";
import Search from "../Search/Search";
import FilterSelect from "../FilterSelect/FilterSelect";
import SearchIcon from "../../Icons/SearchIcon";
import { SelectOptionType } from "../../../global-data";
import { modeArray } from "../../../global-data";

export type SearchBarProps = {
  searchValue: string;
  filterValue: SelectOptionType;
  handleSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFilterChange: (event: SelectOptionType) => void;
};

const SearchBar: React.FC<SearchBarProps> = (props) => {
  return (
    <Container>
      <SearchContainer>
        <SearchIcon />
        <Search
          searchInput={props.searchValue}
          handleInputChange={props.handleSearchInputChange}
        />
      </SearchContainer>
      <FilterSelect
        defaultItemName={props.filterValue}
        itemsNames={[modeArray[0], modeArray[1]]}
        selectedOption={props.filterValue}
        handleSelectedOptionChange={props.handleFilterChange}
        theme="filter"
        disabled={false}
      />
    </Container>
  );
};

export default SearchBar;
