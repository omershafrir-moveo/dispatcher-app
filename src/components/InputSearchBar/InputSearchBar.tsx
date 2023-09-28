import SearchBar from "../SearchBar/SearchBar/SearchBar";
import RecentSearchesMenu from "../RecentSearches/RecentSearchesMenu/RecentSearchesMenu";
import { Container, Spacer } from "./InputSearchBar.styles";
import { useState } from "react";

const InputSearchBar = () => {
  const [isOpenRecent, setIsOpenRecent] = useState(true);
  const [isOpenFilter, setisOpenFilter] = useState(true);

  return (
    <Container>
      <SearchBar />
      <Spacer />
      {isOpenRecent && <RecentSearchesMenu />}
    </Container>
  );
};

export default InputSearchBar;

/***
 possible scenarious:
 1: user clicks on searchBox:
  1.1: there are recent searches: => recent searches dropdown shows
  1.2: there arent recent searches: => nothing.
 
 2: user click on filter:
  2.1: recent searches is opened: recent searches closes, filter opens
  2.2: recent searches is closed: filter opens

 */
