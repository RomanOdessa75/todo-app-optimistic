import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Todo } from "@/types/todo";

interface MutationContext {
  previousTodos: Todo[] | undefined;
}

const createTodo = async (title: string): Promise<Todo> => {
  try {
    const { data } = await axios.post<Todo>(
      "https://jsonplaceholder.typicode.com/todos",
      {
        userId: 1,
        title,
        completed: false,
      }
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Failed to create todo: ${error.response?.status} - ${error.message}`
      );
    }
    throw error;
  }
};

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, string, MutationContext>({
    mutationFn: createTodo,
    onMutate: async (title) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });
      const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]) || [];

      const optimisticTodo: Todo = {
        id: Date.now(),
        title,
        userId: 1,
        completed: false,
      };

      queryClient.setQueryData(["todos"], [...previousTodos, optimisticTodo]);
      console.log("Optimistically adding todo:", optimisticTodo);

      return { previousTodos };
    },
    onError: (error, title, context) => {
      queryClient.setQueryData(["todos"], context?.previousTodos);
      console.error("Error creating todo:", error.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
