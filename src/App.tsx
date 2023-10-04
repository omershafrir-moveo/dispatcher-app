import "./App.css";
import { Container } from "@mui/material";
import PieGraph from "./components/Widget/PieGraph/PieGraph";

function App() {
  return (
    <Container
      className="App"
      sx={{ backgroundColor: "#FFF2FF", height: "100vh" }}
    >
      <PieGraph />
    </Container>
  );
}

export default App;
