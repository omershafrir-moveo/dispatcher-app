import SearchIcon from "../../assets/svg/SearchIcon.svg";
import { StyledTextField } from "./Search.styles";
import DownArrowIcon from "../../Icons/DownArrowIcon";

import { SearchContext } from "../../SearchContext/SearchContext";
import { useContext } from "react";

import { ChangeEvent } from "react";

type searchProps = {
  searchInput: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Search: React.FC<searchProps> = (props) => {
  const {
    isOpenFilter,
    isOpenRecent,
    toggleRecentSearchesMenu,
    toggleFilterMenu,
  } = useContext(SearchContext);

  const handleClicks = () => {
    if (isOpenFilter) {
      toggleFilterMenu();
    }
    toggleRecentSearchesMenu();
  };
  return (
    <StyledTextField
      type="text"
      placeholder="Search"
      onChange={props.handleInputChange}
      onClick={handleClicks}
      onBlur={handleClicks}
    />
  );
};

export default Search;
