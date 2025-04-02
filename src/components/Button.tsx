import React from "react";

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  variant?: "primary" | "danger";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  children,
  variant = "primary",
  className = "",
}) => {
  const baseStyles =
    "p-2 rounded-md disabled:opacity-50 transition-colors duration-200";
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    danger: "text-red-500 hover:text-red-700",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
