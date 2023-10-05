import "./App.css";
import { Container } from "@mui/material";
import WidgetsSection from "./components/Widget/WidgetsSection/WidgetsSection";
import { useState } from "react";
function App() {
  return (
    <div style={{ backgroundColor: "lightBlue" }}>
      <WidgetsSection />
    </div>
  );
}

export default App;
