import React from 'react';

interface LogoProps {
  className?: string;
  clipId?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "size-6", clipId = "clip0" }) => {
  return (
    <div className={`text-primary ${className}`}>
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <g clipPath={`url(#${clipId})`}>
          <path 
            clipRule="evenodd" 
            d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" 
            fill="currentColor" 
            fillRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id={clipId}>
            <rect fill="white" height="48" width="48" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;