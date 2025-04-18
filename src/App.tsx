import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DataFetchWithReactQuery from "./components/DataFetchWithReactQuery";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="py-10 h-screen space-y-5">
        <div>
          <h1 className="font-bold text-center text-3xl">
            Data Fetching with React
          </h1>
          <DataFetchWithReactQuery />
        </div>
      </main>
    </QueryClientProvider>
  );
}

export default App;
