import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import DispatcherDropdown from "./DispatcherDropdown";
import { ReactNode } from "react";

const SearchBox = () => {
  return (
    <TextField
      variant="outlined"
      placeholder="Search"
      InputProps={{
        startAdornment: (
          <IconButton type="submit" aria-label="search">
            <SearchIcon />
          </IconButton>
        ),
      }}
    />
  );
};

const SelectOption = () => {
  const items = ["option 1", "option 2", "option 3"];

  return (
    <></>
    // <DispatcherDropdown
    //   triggerItemName="Everything"
    //   itemsNames={items}
    //   sx={{ minWidth: 120, border: "none" }}
    // />
  );
};

const DispatcherSearchBox = () => {
  return (
    <span>
      <SearchBox />
    </span>
  );
};

export default DispatcherSearchBox;
