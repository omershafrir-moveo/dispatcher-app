import "./App.css";
import { Container } from "@mui/material";
import DispatcherButton from "./components/DispatcherButton/DispatcherButton";
import React , { useState } from "react";
import DropDownMenu from "./components/DropdownMenu/DropDownMenu";
import SearchBar from "./components/SearchBar/SearchBar/SearchBar";
import { SelectOptionType } from "./global-data";

const mockOptions: SelectOptionType[] = [
  {
    key: 1,
    title: "Sports",
    value: "sports",
  },
  {
    key: 2,
    title: "Everything",
    value: "every",
  },
  {
    key: 3,
    title: "Top",
    value: "top",
  },
];

function App() {
  const [val, setVal] = useState<SelectOptionType>({
    key: -1,
    title: "",
    value: "",
  });
  return (
    <Container
      className="App"
      sx={{ backgroundColor: "#FFF2FF", height: "100vh" }}
    >
      {/* <SearchBar /> */}
      <DropDownMenu
        defaultItemName={{ key: -1, title: "Sources", value: "" }}
        itemsNames={mockOptions}
        selectedOption={val}
        handleSelectedOptionChange={(item: SelectOptionType) => setVal(item)}
        theme="default"
      />
    </Container>
  );
}

export default App;
