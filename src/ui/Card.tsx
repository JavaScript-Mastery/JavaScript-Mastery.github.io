import React, { useState, ReactNode } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface CardProps {
  title: string;
  content: string | ReactNode;
  footer?: ReactNode;
  expandable?: boolean;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, content, footer, expandable = false, className }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      className={`rounded-lg shadow-lg p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-transform transform hover:scale-112 hover:shadow-2xl ${className}`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{title}</h2>
        {expandable && (
          <button
            onClick={handleExpandToggle}
            aria-label={isExpanded ? 'Collapse content' : 'Expand content'}
            className="text-gray-500 dark:text-gray-400 bg-white hover:bg-gray-200 hover:text-gray-700 dark:hover:text-gray-200 transition-colors border-none dark:bg-gray-800 dark:hover:bg-gray-700 rounded"
          >
            {isExpanded ? (
              <FiChevronUp className="w-5 h-5" />
            ) : (
              <FiChevronDown className="w-5 h-5" />
            )}
          </button>
        )}
      </div>
      <div className={`text-gray-700 dark:text-gray-300 transition-max-height duration-300 ease-in-out ${isExpanded ? 'max-h-screen' : 'max-h-24 overflow-hidden'}`}>
        {content}
      </div>
      {footer && (
        <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
