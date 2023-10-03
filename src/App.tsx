import "./App.css";
import { Container } from "@mui/material";
import DispatcherButton from "./components/DispatcherButton/DispatcherButton";
import React, { useState } from "react";
import DropDownMenu from "./components/DropdownMenu/DropDownMenu";
import SearchBar from "./components/SearchBar/SearchBar/SearchBar";
import RecentSearchesMenu from "./components/RecentSearches/RecentSearchesMenu/RecentSearchesMenu";
import { RecentSearchesItem } from "./components/RecentSearches/RecentSearchesMenu/RecentSearchesMenu";

function App() {
  return (
    <Container
      className="App"
      sx={{ backgroundColor: "#FFF2FF", height: "100vh" }}
    ></Container>
  );
}

export default App;
