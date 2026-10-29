import React from 'react';

interface NativaLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'white';
  showTagline?: boolean;
}

export const NativaLogo: React.FC<NativaLogoProps> = ({
  className = '',
  variant = 'dark',
  showTagline = false,
}) => {
  const primaryColor = variant === 'white' ? '#FFFFFF' : '#285943';
  const leafColor = variant === 'white' ? '#E2F0D9' : '#6F9E73';
  const textColor = variant === 'white' ? '#FFFFFF' : '#1A382A';

  return (
    <div className={`inline-flex flex-col items-start ${className}`}>
      <div className="flex items-center gap-2 select-none group">
        {/* Organic leaf emblem integrated with letter mark */}
        <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Subtle soft organic circle backdrop */}
            <circle cx="20" cy="20" r="19" fill={primaryColor} fillOpacity={variant === 'white' ? '0.2' : '0.1'} />
            {/* Elegant botanical leaf curving into stem */}
            <path
              d="M12 28C14 20 20 12 30 10C30 20 22 28 12 28Z"
              fill={primaryColor}
            />
            <path
              d="M14 26C18 20 24 16 28 12"
              stroke={leafColor}
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <circle cx="28" cy="12" r="1.5" fill={leafColor} />
          </svg>
        </div>

        {/* NATIVA typography with Montserrat styling and leaf-accented A */}
        <div className="flex items-baseline tracking-[0.22em] font-bold text-xl md:text-2xl leading-none" style={{ color: textColor }}>
          <span className="font-extrabold">N</span>
          <span>A</span>
          <span>T</span>
          <span>I</span>
          <span>V</span>
          {/* Final 'A' with the integrated leaf icon dot */}
          <span className="relative inline-block">
            A
            <svg
              className="absolute -top-1.5 -right-1 w-2.5 h-2.5"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8C3.5 5 6 3 9 2C9 5 7 7.5 4 8.5"
                fill={leafColor}
              />
            </svg>
          </span>
        </div>
      </div>
      {showTagline && (
        <span
          className="text-[10px] tracking-[0.16em] uppercase font-medium mt-1 ml-10 text-[#6F9E73]"
        >
          Bienestar & Botánica
        </span>
      )}
    </div>
  );
};
