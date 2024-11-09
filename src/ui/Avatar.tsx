import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const sizeClasses = {
  small: 'w-8 h-8',
  medium: 'w-16 h-16',
  large: 'w-24 h-24',
};

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 'medium', className }) => {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 ${sizeClasses[size]} ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200">
          {/* Placeholder initials */}
          {alt ? alt.charAt(0).toUpperCase() : 'A'}
        </div>
      )}
    </div>
  );
};

export default Avatar;