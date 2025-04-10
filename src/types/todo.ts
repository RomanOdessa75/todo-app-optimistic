export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface CreateTodoInput {
  title: string;
  userId?: number;
  completed?: boolean;
}
