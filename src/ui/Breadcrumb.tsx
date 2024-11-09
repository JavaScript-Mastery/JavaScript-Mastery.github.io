import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import Link from '@docusaurus/Link';

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => {
  return (
    <nav className={`flex items-center text-gray-700 dark:text-gray-300 ${className}`} aria-label="Breadcrumb">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && (
            <FaChevronRight className="w-4 h-4 mx-2 text-gray-500 dark:text-gray-400" aria-hidden="true" />
          )}
          {item.href ? (
            <Link
              to={item.href}
              className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
