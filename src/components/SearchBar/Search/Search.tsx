import { StyledTextField } from "./Search.styles";

import { SearchContext } from "../../SearchContext/SearchContext";
import { useContext } from "react";

type searchProps = {
  searchInput: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Search: React.FC<searchProps> = (props) => {
  const { isOpenRecent, toggleRecentSearchesMenu, searchValue, sendRequest } =
    useContext(SearchContext);

  const handleClick = () => {
    if (!isOpenRecent) {
      toggleRecentSearchesMenu();
    }
  };
  const handleBlur = () => {
    if (isOpenRecent) {
      toggleRecentSearchesMenu();
    }
  };

  return (
    <StyledTextField
      type="text"
      className="StyledTextField"
      value={searchValue}
      placeholder="Search"
      onChange={props.handleInputChange}
      onClick={handleClick}
      onBlur={handleBlur}
      onKeyDown={(event) => {
        if (event.key == "Enter") sendRequest(searchValue);
      }}
    />
  );
};

export default Search;
