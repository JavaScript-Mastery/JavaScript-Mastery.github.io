import React from 'react';

interface CardProps {
  title: string;
  description: string;
  image: string;
  footerContent?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, image, footerContent }) => {
  return (
    <div className="max-w-sm rounded-lg shadow-xl bg-white dark:bg-gray-800 overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
      </div>
      {footerContent && (
        <div className="bg-gray-100 dark:bg-gray-900 p-4 text-right">
          {footerContent}
        </div>
      )}
    </div>
  );
};

export default Card;