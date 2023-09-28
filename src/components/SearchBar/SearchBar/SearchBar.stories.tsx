import { Meta } from "@storybook/react";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { SelectOptionType } from "../../../global-data";

const meta: Meta<typeof SearchBar> = {
  title: "SearchBar",
  component: SearchBar,
};

export default meta;

export const SearchBarWithState: React.FC = () => {
  const [searchValue, setSearchValue] = useState("Search");
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
  const handleFilterChange = (newOption: SelectOptionType) => {
    setFilterValue(newOption);
  };

  return (
    <SearchBar
      searchValue={searchValue}
      filterValue={filterValue}
      handleSearchInputChange={handleSearchInputChange}
      handleFilterChange={handleFilterChange}
    />
  );
};
