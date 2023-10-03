import "./App.css";
import { Container } from "@mui/material";
import DispatcherButton from "./components/DispatcherButton/DispatcherButton";
import React, { useContext, useState } from "react";
import DropDownMenu from "./components/DropdownMenu/DropDownMenu";
import SearchBar from "./components/SearchBar/SearchBar/SearchBar";
import RecentSearchesMenu from "./components/RecentSearches/RecentSearchesMenu/RecentSearchesMenu";
import { RecentSearchesItem } from "./components/RecentSearches/RecentSearchesMenu/RecentSearchesMenu";
import Header from "./components/Header/Header";
import { SearchContext } from "./components/SearchContext/SearchContext";
function App() {
  const [color, setColor] = useState("red");

  return (
    <Container
      className="App"
      sx={{ backgroundColor: "#FFF2FF", height: "100vh" }}
    >
      <Header />
    </Container>
  );
}

export default App;
