import { RecentSearchesItem } from "../components/RecentSearches/RecentSearchesMenu/RecentSearchesMenu";
import { SearchContextProps } from "../components/SearchContext/SearchContext";

export default {
  handleClick: (i: RecentSearchesItem) => {
    console.log("click");
  },
  handleDelete: (i: RecentSearchesItem) => {
    console.log("Delete");
  },
  handleClear: () => {
    console.log("Clear");
  },
};
