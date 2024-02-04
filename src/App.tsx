import "./App.css";
import Header from "./components/Header/Header";
import RecentSearchesMenu from "./components/RecentSearches/RecentSearchesMenu/RecentSearchesMenu";
import WidgetsSection from "./components/Widget/WidgetsSection/WidgetsSection";
import { useState ,useContext} from "react";
import BodyLayout from "./layout/BodyLayout/BodyLayout";
import FiltersLayout from "./layout/BodyLayout/FiltersLayout/FiltersLayout";
import { SearchContext } from "./components/SearchContext/SearchContext";
function App() {
  
  const context = useContext(SearchContext)
  
  return (
    <>

    </>
  );
}

export default App;
