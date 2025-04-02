import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Todo } from "@/types/todo";

interface MutationContext {
  previousTodos: Todo[] | undefined;
}

const deleteTodo = async (id: number): Promise<number> => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return id;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Failed to delete todo: ${error.response?.status} - ${error.message}`
      );
    }
    throw error;
  }
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation<number, Error, number, MutationContext>({
    mutationFn: deleteTodo,
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });
      const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]) || [];

      const todoToDelete = previousTodos.find((todo) => todo.id === id);
      console.log("Optimistically deleting todo:", todoToDelete);

      queryClient.setQueryData(
        ["todos"],
        previousTodos.filter((todo) => todo.id !== id)
      );

      return { previousTodos };
    },
    onError: (error, id, context) => {
      queryClient.setQueryData(["todos"], context?.previousTodos);
      console.error("Error deleting todo:", error.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
