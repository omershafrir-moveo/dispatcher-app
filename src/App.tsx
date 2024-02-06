import "./App.css";
import { InputProvider } from "./components/SearchContext/SearchContext";
import SearchContextApi from "./api/SearchContextApi";
import "rsuite/dist/rsuite.min.css";
import PageLayout from "./layout/PageLayout/PageLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <InputProvider userInputAPI={SearchContextApi}>
        <PageLayout />
      </InputProvider>
    </QueryClientProvider>
  );
}

export default App;
