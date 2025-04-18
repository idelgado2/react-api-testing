import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../api";

export default function DataFetchWithReactQuery() {
  const { data: todos, isLoading } = useQuery({
    queryFn: () => fetchTodos(),
    queryKey: ["todos"],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        {todos?.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </div>
    </>
  );
}
