import Link from '@docusaurus/Link';
import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  link?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, link, icon }) => {
  const buttonClasses = `px-6 py-3 rounded-lg transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none dark:focus:outline-none dark:bg-gradient-to-r dark:from-purple-700 dark:to-indigo-700 dark:text-white bg-yellow-300`;

  if (link) {
    return (
      <Link
        to={link}
        className={`${buttonClasses} duration-300 ease-in-out block text-center`}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {label}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${buttonClasses} duration-300 ease-in-out`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;