"use client";

import React, { useEffect } from "react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type,
  onClose,
  duration = 3000,
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const isError = type === "error";
  const borderColor = isError ? "border-red-500" : "border-green-500";
  const iconBgColor = isError ? "bg-red-500" : "bg-green-500";
  const iconColor = isError ? "text-red-500" : "text-green-500";

  return (
    <div className="fixed top-5 right-5 z-50">
      <div className={`modal-content ${borderColor} animate-slideInRight`}>
        <div className={`modal-icon ${iconBgColor}`}>{isError ? "✕" : "✓"}</div>
        <h2 className="text-lg font-semibold">
          {isError ? "Error" : "Success"}
        </h2>
        <p className="text-gray-600">{message}</p>
        <button onClick={onClose} className={`close-btn ${iconColor}`}>
          Dismiss
        </button>
      </div>
    </div>
  );
};
