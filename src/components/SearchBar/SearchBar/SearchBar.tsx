import {Container, SearchContainer} from "./SearchBar.styles";
import Search from "../Search/Search";
import FilterSelect from "../FilterSelect/FilterSelect";
import SearchIcon from "../../Icons/SearchIcon";
import { useState } from "react";

const SearchBar = () => {
  const [selectedOption, setSelectedOption] = useState("Top Headlines");
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("input change");
    console.log(searchValue);
  };

  //   const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  const handleFilterChange = (event: string) => {
    setSelectedOption(event);
    console.log("filter change");
  };
  return (
    <Container >
      <SearchContainer >
        <SearchIcon />
        <Search
          searchInput={searchValue}
          handleInputChange={handleInputChange}
        />
      </SearchContainer>
      <FilterSelect
        defaultItemName="Top Headlines"
        itemsNames={["Top Headlines", "Everything"]}
        selectedOption={selectedOption}
        handleSelectedOptionChange={handleFilterChange}
        theme="filter"
      />
    </Container>
  );
};

export default SearchBar;
