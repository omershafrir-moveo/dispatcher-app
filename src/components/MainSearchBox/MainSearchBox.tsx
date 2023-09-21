import TextField from "@mui/material/TextField";
import SearchIcon from "../../assets/svg/SearchIcon.svg";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
// import DispatcherDropdown from "../../trash/DispatcherDropdown/DispatcherDropdown";
import { useState, ChangeEvent, MouseEvent } from "react";
import { Dispatch, SetStateAction } from "react";
import {
  mainSearchStyle,
  mainSearchBoxDropdownStyle,
  mainSearchBoxSearchStyle,
} from "./styles";

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
        value={searchInput}
        onChange={handleInputChange}
        InputProps={{
          startAdornment: (
            <img src={SearchIcon} />
            // <IconButton type="submit" aria-label="search">
            //   <SearchIcon />
            // </IconButton>
          ),
        }}
        sx={mainSearchBoxSearchStyle}
      />
    );
  };

  return (
    <Box sx={mainSearchStyle}>
      <SearchBox searchValue={searchInput} setSearchValue={setSearchInput} />
      {/* <DispatcherDropdown
        triggerItemName="Everything"
        itemsNames={itemsNames}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        sx={mainSearchBoxDropdownStyle}
      /> */}
    </Box>
  );
};

export default MainSearchBox;
