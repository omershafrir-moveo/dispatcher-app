import React , { useState }from "react";
import { Container, SearchContainer } from "./SearchBar.styles";
import Search from "../Search/Search";
import FilterSelect from "../FilterSelect/FilterSelect";
import SearchIcon from "../../Icons/SearchIcon";
import { SelectOptionType } from "../../../global-data";


export type SearchBarProps = {
  searchValue: string;
  filterValue: SelectOptionType;
  handleSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFilterChange: (event: SelectOptionType) => void;
}


const SearchBar:React.FC<SearchBarProps> = (props) => {

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
        defaultItemName={{ key: 0, title: "Top Headlines", value: "top-headlines" }}
        itemsNames={[
          { key: 0, title: "Top Headlines", value: "top-headlines" },
          { key: 1, title: "Everything", value: "every" },
        ]}
        selectedOption={props.filterValue}
        handleSelectedOptionChange={props.handleFilterChange}
        theme="filter"
      />
    </Container>
  );
};

export default SearchBar;
