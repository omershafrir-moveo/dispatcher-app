import React , { useState }from "react";
import { Container, SearchContainer } from "./SearchBar.styles";
import Search from "../Search/Search";
import FilterSelect from "../FilterSelect/FilterSelect";
import SearchIcon from "../../Icons/SearchIcon";
import { SelectOptionType } from "../../../global-data";

const SearchBar = () => {
  const [selectedOption, setSelectedOption] = useState({ key: 0, title: "Top Headlines", value: "top-headlines" });
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("input change");
    console.log(searchValue);
  };

  const handleFilterChange = (event: SelectOptionType) => {
    setSelectedOption(event);
    console.log("filter change");
  };
  return (
    <Container>
      <SearchContainer>
        <SearchIcon />
        <Search
          searchInput={searchValue}
          handleInputChange={handleInputChange}
        />
      </SearchContainer>
      <FilterSelect
        defaultItemName={{ key: 0, title: "Top Headlines", value: "top-headlines" }}
        itemsNames={[
          { key: 0, title: "Top Headlines", value: "top-headlines" },
          { key: 1, title: "Everything", value: "every" },
        ]}
        selectedOption={selectedOption}
        handleSelectedOptionChange={handleFilterChange}
        theme="filter"
      />
    </Container>
  );
};

export default SearchBar;
