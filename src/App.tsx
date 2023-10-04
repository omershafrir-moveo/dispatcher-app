import "./App.css";
import { Container } from "@mui/material";
import MonthsGraph from "./components/Widget/MonthsGraph/MonthsGraph";


function App() {
  return (
    <Container
      className="App"
      sx={{ backgroundColor: "#FFF2FF", height: "100vh" }}
    >
      <div style={{height:"100px"}}></div>
      <MonthsGraph />
    </Container>
  );
}

export default App;
