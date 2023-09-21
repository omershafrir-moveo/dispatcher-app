import "./App.css";
import { Typography, Container, Button, Box } from "@mui/material";
import { dropdownStyle } from "./trash/DispatcherDropdown/styles";
import DispatcherButton from "./components/DispatcherButton/DispatcherButton";
import DispatcherDropdown from "./trash/DispatcherDropdown/DispatcherDropdown";
import Header from "./components/Header/Header";
import { useState } from "react";
import DropdownOption from "./components/DropdownOption/DropdownOption";
import DropDownMenu from "./components/DropdownMenu/DropDownMenu";

function App() {
  const menuNames = [
    "Mako",
    "Ynet",
    "Walla",
    "Yahoo",
    "N12",
    "Yahoo",
    "N12",
    "Yahoo",
    "N12",
  ];
  const [selected, setSelected] = useState("Sources");
  return (
    <Container
      className="App"
      sx={{ backgroundColor: "#FFF2FF", height: "1000px" }}
    >
      {/* <DispatcherButton text="NAVIGATE TO DISPATCH" handleClick={() => {}} /> */}
      {/* <DropdownOption
        value="Sources"
        isInputBox={true}
        handleClick={() => {}}
      /> */}

      <DropDownMenu
        defaultItemName="clickMe"
        itemsNames={menuNames}
        selectedOption={selected}
        setSelectedOption={setSelected}
      />
      {/* <DispatcherDropdown
        triggerItemName="clickMe"
        itemsNames={menuNames}
        selectedOption={selected}
        setSelectedOption={setSelected}
        sx={dropdownStyle}
      /> */}
      {/* <Header /> */}
    </Container>
  );
}

export default App;
