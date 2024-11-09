import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
  Title: string;
  children: React.ReactNode;
  className?: string;
}

const Sheet: React.FC<SheetProps> = ({
  isOpen,
  onClose,
  Title,
  children,
  className,
}) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      <div
        className={`fixed inset-y-0 right-0 bg-white dark:bg-gray-800 shadow-lg w-96 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-all duration-300 ease-in-out z-50 p-4 ${className}`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {Title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 bg-transparent border-none cursor-pointer"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="mt-4 overflow-y-auto max-h-[calc(100vh-120px)] pr-2">
          {children}
        </div>
      </div>
    </>
  );
};

export default Sheet;