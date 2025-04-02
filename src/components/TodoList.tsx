"use client";

import { useState } from "react";
import { useGetTodos, useCreateTodo, useDeleteTodo } from "@/hooks";
import { TodoForm } from "@/components/TodoForm";
import { TodoItem } from "@/components/TodoItem";
import { Toast } from "@/components/Toast";
import { Todo } from "@/types/todo";

export function TodoList() {
  const [newTodo, setNewTodo] = useState("");
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const { data: todos, isLoading } = useGetTodos();
  const createMutation = useCreateTodo();
  const deleteMutation = useDeleteTodo();

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      createMutation.mutate(newTodo, {
        onSuccess: () => {
          setToast({
            message: "Todo created successfully",
            type: "success",
          });
          setNewTodo("");
        },
        onError: (error: Error) => {
          setToast({
            message: error.message,
            type: "error",
          });
        },
      });
    }
  };

  const handleDeleteTodo = (id: number) => {
    deleteMutation.mutate(id, {
      onSuccess: () => {
        setToast({
          message: "Todo deleted successfully",
          type: "success",
        });
      },
      onError: (error: Error) => {
        setToast({
          message: error.message,
          type: "error",
        });
      },
    });
  };

  if (isLoading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Todos List</h1>

      <TodoForm
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onSubmit={handleAddTodo}
        isSubmitting={createMutation.isPending}
      />

      <ul className="space-y-2">
        {todos?.map((todo: Todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDeleteTodo}
            isDeleting={deleteMutation.isPending}
          />
        ))}
      </ul>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
