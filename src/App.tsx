import "./App.css";
import { Typography, Container, Button } from "@mui/material";
import { Dropdown } from "@mui/base/Dropdown";
import * as sx from "../src/styles"
import DispatcherButton from "./components/DispatcherButton";
import DispatcherDropdown from "./components/DispatcherDropdown";
import DispatcherSearchBox from "./components/DispatcherSearchBox";
import MainSearchBox from "./components/MainSearchBox";
import Header from "./components/Header";

function App() {
  const menuNames = ["first", "second", "third", "fourth", "fifth", "sixth"];
  return (
    <Container className="App">
      {/* <Button variant="contained">NAVIGATE TO DISPATCH </Button> */}
      <DispatcherButton text="NAVIGATE TO DISPATCH" handleClick={() => {}} />
      <DispatcherDropdown
        triggerItemName="clickMe"
        itemsNames={menuNames}
        selectedOption="demo"
        setSelectedOption={(x) => {}}
        sx={sx.whiteDropdownProps}
      />
      <Header />
    </Container>
  );
}

export default App;
