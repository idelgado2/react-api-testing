import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { DashboardContext } from "./Contexts/context";

export interface User {
  human: boolean;
  name: string;
}

const queryClient = new QueryClient();

function App() {
  const [user] = useState<User>({
    human: true,
    name: "Isaac",
  });
  return (
    <DashboardContext.Provider value={user}>
      <QueryClientProvider client={queryClient}>
        <main className="py-10 h-screen space-y-5">
          <div>
            <h1 className="font-bold text-center text-3xl">
              Data Fetching with React
            </h1>
            {/* <DataFetch/> */}
            {/* <DataFetchWithReactQuery /> */}
            {/* <DashboardUsingContext /> */}
          </div>
        </main>
      </QueryClientProvider>
    </DashboardContext.Provider>
  );
}

export default App;
