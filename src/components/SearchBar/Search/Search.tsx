import { StyledTextField } from "./Search.styles";

import { SearchContext } from "../../SearchContext/SearchContext";
import { useContext } from "react";

type searchProps = {
  searchInput: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Search: React.FC<searchProps> = (props) => {
  const {
    isOpenRecent,
    toggleRecentSearchesMenu,
  } = useContext(SearchContext);

  const handleClick = () => {
    if (!isOpenRecent) {
      toggleRecentSearchesMenu();
    }
  };
  const handleBlur = () => {
    if (isOpenRecent){
      toggleRecentSearchesMenu();
    }
  }
  return (
    <StyledTextField
      type="text"
      placeholder="Search"
      onChange={props.handleInputChange}
      onClick={handleClick}
      onBlur={handleBlur}
    />
  );
};

export default Search;
