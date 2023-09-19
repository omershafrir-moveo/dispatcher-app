import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import DispatcherDropdown from "./DispatcherDropdown";
import { useState, ChangeEvent, MouseEvent } from "react";
import { Dispatch, SetStateAction } from "react";
import * as sx from "../styles";

const MainSearchBox = () => {
  const [searchInput, setSearchInput] = useState("Search");
  const [selectedOption, setSelectedOption] = useState("");
  const itemsNames = ["Everything", "Top Headlines"];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const SearchBox: React.FC<{
    searchValue: string;
    setSearchValue: Dispatch<SetStateAction<string>>;
  }> = ({ searchValue, setSearchValue }) => {
    return (
      <TextField
        variant="outlined"
        placeholder="Search"
        onChange={handleInputChange}
        InputProps={{
          startAdornment: (
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
          ),
        }}
        sx={sx.mainSearchBoxSearch}
      />
    );
  };

  return (
    <>
      <SearchBox searchValue={searchInput} setSearchValue={setSearchInput} />
      <DispatcherDropdown
        triggerItemName="Everything"
        itemsNames={itemsNames}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        sx={sx.mainSearchBoxDropdown}
      />
    </>
  );
};

export default MainSearchBox;
