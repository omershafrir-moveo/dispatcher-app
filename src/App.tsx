import "./App.css";
import { Typography, Container, Button, Box } from "@mui/material";
import DispatcherButton from "./components/DispatcherButton/DispatcherButton";
import Header from "./components/Header/Header";
import { useState } from "react";
import DropdownOption from "./components/DropdownOption/DropdownOption";
import DropDownMenu from "./components/DropdownMenu/DropDownMenu";
import SearchBar from "./components/SearchBar/SearchBar/SearchBar";
import SearchIcon from "./components/Icons/SearchIcon";
function App() {
  return (
    <Container
      className="App"
      sx={{ backgroundColor: "#FFF2FF", height: "100vh" }}
    >
    <SearchBar />
    </Container>
  );
}

export default App;
