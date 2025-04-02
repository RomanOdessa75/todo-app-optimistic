import { useQuery } from "@tanstack/react-query";
import { Todo } from "@/types/todo";
import axios from "axios";

const fetchTodos = async () => {
  try {
    const { data } = await axios.get<Todo[]>(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Failed to fetch todos: ${error.response?.status} - ${error.message}`
      );
    }
    throw error;
  }
};

export const useGetTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
};
