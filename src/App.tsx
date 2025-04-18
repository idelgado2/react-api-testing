import DataFetch from "./components/DataFetch";

function App() {
  return (
    <main className="py-10 h-screen space-y-5">
      <div>
        <h1 className="font-bold text-center text-3xl">
          Data Fetching with React
        </h1>
        <DataFetch />
      </div>
    </main>
  );
}

export default App;
