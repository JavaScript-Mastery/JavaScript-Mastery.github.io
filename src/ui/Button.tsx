import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
}

const variantClasses = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800',
  secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600',
  outline: 'border border-gray-500 text-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-400 dark:hover:bg-gray-800',
};

const sizeClasses = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary', size = 'medium', disabled = false, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-colors duration-200 ease-in-out border-none ${
        variantClasses[variant]
      } ${sizeClasses[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
