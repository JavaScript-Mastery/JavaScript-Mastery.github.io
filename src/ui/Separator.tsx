import React from 'react';

interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

const Separator: React.FC<SeparatorProps> = ({ orientation = 'horizontal', className }) => {
  const baseClasses = 'bg-gray-300 dark:bg-gray-600 transition-colors duration-200 ease-in-out';
  const orientationClasses = orientation === 'vertical' ? 'h-full w-px' : 'w-full h-px';

  return (
    <div className={`${baseClasses} ${orientationClasses} ${className}`} />
  );
};

export default Separator;