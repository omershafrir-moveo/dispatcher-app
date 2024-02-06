import "./App.css";
import {
  InputProvider,
} from "./components/SearchContext/SearchContext";
import SearchContextApi from "./api/SearchContextApi";
import "rsuite/dist/rsuite.min.css";
import PageLayout from "./layout/PageLayout/PageLayout";

function App() {
  return (
    <>
      <InputProvider userInputAPI={SearchContextApi}>
        <PageLayout />
      </InputProvider>
    </>
  );
}

export default App;
