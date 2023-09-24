import "./App.css";
import { Typography, Container, Button, Box } from "@mui/material";
import DispatcherButton from "./components/DispatcherButton/DispatcherButton";
import Header from "./components/Header/Header";
import { useState } from "react";
import DropdownOption from "./components/DropdownOption/DropdownOption";
import DropDownMenu from "./components/DropdownMenu/DropDownMenu";

function App() {
  return (
    <Container
      className="App"
      sx={{ backgroundColor: "#FFF2FF", height: "100vh" }}
    >
      {/* <DropDownMenu
        defaultItemName="clickMe"
        itemsNames={menuNames}
        selectedOption={selected}
        setSelectedOption={setSelected}
        theme="default"
      /> */}
    </Container>
  );
}

export default App;
