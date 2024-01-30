import "./App.css";
import Header from "./components/Header/Header";
import RecentSearchesMenu from "./components/RecentSearches/RecentSearchesMenu/RecentSearchesMenu";
import WidgetsSection from "./components/Widget/WidgetsSection/WidgetsSection";
import { useState } from "react";
function App() {
  return (
    <div style={{ backgroundColor: "lightBlue" }}>
      {/* <WidgetsSection /> */}
      <Header />
    </div>
  );
}

export default App;
