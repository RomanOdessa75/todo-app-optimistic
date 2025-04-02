import React from "react";

interface TodoInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
}

export const TodoInput: React.FC<TodoInputProps> = ({
  value,
  onChange,
  placeholder = "Add a new todo",
  disabled = false,
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};
