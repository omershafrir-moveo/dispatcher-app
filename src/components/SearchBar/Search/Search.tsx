import { StyledTextField } from "./Search.styles";

import { SearchContext } from "../../SearchContext/SearchContext";
import { useContext } from "react";

type searchProps = {
  searchInput: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Search: React.FC<searchProps> = (props) => {
  const { isOpenRecent, toggleRecentSearchesMenu, searchValue } =
    useContext(SearchContext);

  const handleClick = () => {
    if (!isOpenRecent) {
      toggleRecentSearchesMenu();
    }
  };
  const handleBlur = () => {
    setTimeout(() => {
      if (isOpenRecent) {
        toggleRecentSearchesMenu();
      }
    }, 150);
  };
  return (
    <StyledTextField
      type="text"
      value={searchValue}
      placeholder="Search"
      onChange={props.handleInputChange}
      onClick={handleClick}
      onBlur={handleBlur}
    />
  );
};

export default Search;
