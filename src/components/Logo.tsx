// src/components/Logo.tsx
import React from 'react';

interface LogoProps {
  className?: string; // For applying layout styles (width/height)
  variant?: 'primary' | 'white'; // Preset color options
}

const Logo: React.FC<LogoProps> = ({ className, variant = 'primary' }) => {
  // Preset color codes (adjust to match your CSS variables)
  const primaryColor = 'var(--primary, #0284c7)';
  const secondaryColor = 'var(--secondary, #38bdf8)';
  const whiteColor = '#ffffff';

  // Determine colors based on variant
  const circleColor = variant === 'white' ? whiteColor : primaryColor;
  const textColor = variant === 'white' ? primaryColor : whiteColor;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
      aria-labelledby="logoTitle"
      role="img"
    >
      <title id="logoTitle">Apex Dental Clinic Logo</title>
      
      {/* Defs section for optional gradients/shading */}
      <defs>
        <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={circleColor} />
          <stop offset="100%" stopColor={secondaryColor} />
        </linearGradient>
      </defs>

      {/* Main Circle - Uses primary color with a gradient look */}
      <circle cx="50" cy="50" r="48" fill={variant === 'white' ? whiteColor : `url(#circleGradient)`} />

      {/* The letter 'A' - Bold, clean font styling */}
      <text
        x="50"
        y="50"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize="65"
        fontWeight="800"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
        fill={textColor}
      >
        A
      </text>
    </svg>
  );
};

export default Logo;