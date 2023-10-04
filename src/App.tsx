import "./App.css";
import { Container } from "@mui/material";
import DispatcherButton from "./components/DispatcherButton/DispatcherButton";
import React, { useState } from "react";
import DropDownMenu from "./components/DropdownMenu/DropDownMenu";
import SearchBar from "./components/SearchBar/SearchBar/SearchBar";
import { SelectOptionType } from "./global-data";
import ArticleCard from "./components/ArticleCard/ArticleCard";

import { ArticleProps } from "./components/ArticleCard/ArticleCard";

function App() {
  return (
    <Container
      className="App"
      sx={{ backgroundColor: "#FFF2FF", height: "100vh" }}
    >
    </Container>
  );
}

export default App;
