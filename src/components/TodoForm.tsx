import React from "react";
import { TodoInput } from "./TodoInput";
import { Button } from "./Button";

interface TodoFormProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
}

export const TodoForm: React.FC<TodoFormProps> = ({
  value,
  onChange,
  onSubmit,
  isSubmitting = false,
}) => {
  return (
    <div className="flex mb-4">
      <TodoInput value={value} onChange={onChange} disabled={isSubmitting} />
      <Button
        onClick={onSubmit}
        disabled={isSubmitting || !value.trim()}
        className="rounded-l-none cursor-pointer"
      >
        {isSubmitting ? "Adding..." : "Add"}
      </Button>
    </div>
  );
};
