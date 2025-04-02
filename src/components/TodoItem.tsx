import React from "react";
import { Button } from "./Button";
import { Todo } from "@/types/todo";

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
  isDeleting?: boolean;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onDelete,
  isDeleting = false,
}) => {
  return (
    <li
      className="flex justify-between items-center p-2 bg-white rounded-md shadow-sm
                 transition-all duration-300 ease-in-out hover:bg-gray-50 hover:shadow-md
                 group relative overflow-hidden"
    >
      <span
        className={`${
          todo.completed ? "line-through text-gray-500" : ""
        } transition-colors duration-200`}
      >
        {todo.title}
      </span>
      <div className="flex items-center gap-2">
        <span className="h-6 w-px bg-gray-300"></span>
        <Button
          onClick={() => onDelete(todo.id)}
          disabled={isDeleting}
          variant="danger"
          className="p-1"
        >
          {isDeleting ? (
            "Deleting..."
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M3 6h18" />
              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              <path d="M10 11v6" />
              <path d="M14 11v6" />
              <path d="M5 6l1 14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-14" />
            </svg>
          )}
        </Button>
      </div>
    </li>
  );
};
