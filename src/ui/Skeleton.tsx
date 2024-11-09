import React from 'react';

interface SkeletonProps {
  width?: string;
  height?: string;
  count?: number;
  className?: string;
  circle?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width = 'w-full',
  height = 'h-4',
  count = 1,
  className,
  circle = false,
}) => {
  const skeletonClasses = `bg-gray-300 dark:bg-gray-700 animate-pulse ${width} ${height} ${circle ? 'rounded-full' : 'rounded'} ${className}`;

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={skeletonClasses} />
      ))}
    </>
  );
};

export default Skeleton;