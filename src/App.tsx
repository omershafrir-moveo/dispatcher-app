import "./App.css";
import { InputProvider } from "./components/SearchContext/SearchContext";
import "rsuite/dist/rsuite.min.css";
import PageLayout from "./layout/BodyLayout/PageLayout/PageLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Responsiveness from "./components/Responsiveness/Responsiveness";
function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <InputProvider>
        <PageLayout />
      </InputProvider>
    </QueryClientProvider>
  );
}

export default App;
