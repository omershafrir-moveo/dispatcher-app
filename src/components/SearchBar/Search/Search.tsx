import { TextField } from "@mui/material";
import SearchIcon from "../../assets/svg/SearchIcon.svg";
import { StyledTextField, StyledLabel } from "./Search.styles";
import DownArrowIcon from "../../Icons/DownArrowIcon";
import {
  mainSearchStyle,
  mainSearchBoxDropdownStyle,
  searchStyle,
} from "./styles";
import { useState, ChangeEvent, MouseEvent } from "react";
import { Dispatch, SetStateAction } from "react";

type searchProps = {
  searchInput: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<searchProps> = (props) => {
  return (
    <StyledTextField
      type="text"
      placeholder="Search"
      onChange={props.handleInputChange}
    />
  );

  //   return (
  //     <TextField
  //       variant="outlined"
  //       placeholder="Search"
  //       value={props.searchInput}
  //       onChange={props.handleInputChange}
  //       InputProps={{
  //         startAdornment: (
  //           <img src={SearchIcon} />
  //           // <IconButton type="submit" aria-label="search">
  //           //   <SearchIcon />
  //           // </IconButton>
  //         ),
  //       }}
  //       sx={searchStyle}
  //     />
  //   );
};

export default Search;
