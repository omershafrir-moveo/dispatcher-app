import SearchIcon from "../../assets/svg/SearchIcon.svg";
import { StyledTextField, } from "./Search.styles";
import DownArrowIcon from "../../Icons/DownArrowIcon";

import { useState, ChangeEvent, MouseEvent } from "react";

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

};

export default Search;
