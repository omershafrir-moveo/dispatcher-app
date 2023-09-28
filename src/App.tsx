import "./App.css";
import { Container } from "@mui/material";
import DispatcherButton from "./components/DispatcherButton/DispatcherButton";
import React, { useState } from "react";
import DropDownMenu from "./components/DropdownMenu/DropDownMenu";
import SearchBar from "./components/SearchBar/SearchBar/SearchBar";
import { SelectOptionType } from "./global-data";
import ArticleCard from "./components/ArticleCard/ArticleCard";

import { ArticleProps } from "./components/ArticleCard/ArticleCard";

const photoProps: ArticleProps = {
  photo: {
    src: "https://a.espncdn.com/photo/2021/0801/r889086_1296x729_16-9.jpg",
    alt: "SEAN STRICKLAND",
  },
  text: {
    date: "Friday Jun 25, 2021",
    body: "There's nothing flashy about Sean Strickland, unless you're counting the punches he relentlessly flashes into the face of his opponent. Strickland won his fifth fight in a row on Saturday night, ove… [+1595 chars]",
    source: "Jeff Wagenheim, ESPN",
    title:
      "Sean Strickland dominates Uriah Hall in unanimous decision for 5th straight win - ESPN",
    button: (
      <DispatcherButton text="NAVIGATE TO DISPATCH" handleClick={() => {}} />
    ),
  },
};

function App() {
  return (
    <Container
      className="App"
      sx={{ backgroundColor: "#FFF2FF", height: "100vh" }}
    >
      <ArticleCard photo={photoProps.photo} text={photoProps.text} />
    </Container>
  );
}

export default App;
