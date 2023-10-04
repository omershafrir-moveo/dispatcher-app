import "./App.css";
import { Container } from "@mui/material";
import React, { useContext, useState } from "react";
import Header from "./components/Header/Header";

function App() {
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
