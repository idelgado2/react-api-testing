import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTodo, fetchTodos } from "../api";
import { useState } from "react";

export default function DataFetchWithReactQuery() {
  const queryClient = useQueryClient();
  const { data: todos, isLoading } = useQuery({
    queryFn: () => fetchTodos(),
    queryKey: ["todos"],
  });
  const [title, setTitle] = useState("");
  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <input
          className="border-4"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={async () => {
            try {
              await addTodoMutation({ title });
              setTitle("");
            } catch (e) {
              console.log(e);
            }
          }}
        >
          Add Todo
        </button>
      </div>
      <div>
        {todos?.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </div>
    </>
  );
}
