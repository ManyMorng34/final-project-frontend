"use client";
import { useEffect } from "react";

const Toast = ({ message, type, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  const getBackgroundColor = (type) => {
    switch (type) {
      case "error":
        return "bg-red-500 text-white";
      case "success":
        return "bg-green-500 text-white";
      case "warning":
        return "bg-yellow-500 text-black";
      case "info":
        return "bg-blue-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className={`toast fixed top-10 right-4 m-4 z-50`}>
      <div
        className={`alert ${getBackgroundColor(type)} p-4 rounded-lgshadow-lg`}
      >
        <div className="flex justify-between items-center">
          <span>{message}</span>
          <button
            onClick={onClose}
            className="text-white btn btn-sm btn-circle btn-ghost"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
