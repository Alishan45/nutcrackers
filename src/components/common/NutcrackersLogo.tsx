import React from 'react';

interface NutcrackersLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const NutcrackersEmblem: React.FC<{ size?: number; className?: string }> = ({ 
  size = 36, 
  className = "" 
}) => {
  return (
    <div 
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`} 
      style={{ width: size, height: size }}
      aria-label="Nutcrackers Emblem"
    >
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full drop-shadow-[0_0_12px_rgba(45,212,191,0.35)]" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(14, 10) rotate(-10, 36, 40)">
          {/* Top Golden / Amber Nut Cap with apex */}
          <path 
            d="M16 38 C20 18, 52 18, 56 38 Z" 
            fill="rgba(245, 158, 11, 0.08)" 
            stroke="#F59E0B" 
            strokeWidth="5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          {/* Inner Golden Cap contour */}
          <path 
            d="M24 28 C28 22, 44 22, 48 28" 
            fill="none" 
            stroke="#FBBF24" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
          />
          {/* Cap Tip stem */}
          <path 
            d="M36 12 L36 18" 
            stroke="#F59E0B" 
            strokeWidth="4.5" 
            strokeLinecap="round" 
          />

          {/* Bottom Teal / Cyan Cup Shell */}
          <path 
            d="M18 42 C20 70, 54 70, 56 42" 
            fill="rgba(45, 212, 191, 0.08)" 
            stroke="#2DD4BF" 
            strokeWidth="5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          {/* Inner Teal contour */}
          <path 
            d="M25 44 C27 61, 47 61, 49 44" 
            fill="none" 
            stroke="#06B6D4" 
            strokeWidth="4" 
            strokeLinecap="round" 
          />
        </g>
      </svg>
    </div>
  );
};

export const NutcrackersLogo: React.FC<NutcrackersLogoProps> = ({ 
  className = "", 
  size = 'md',
  showSubtitle = false 
}) => {
  const sizeMap = {
    sm: { emblem: 26, text: 'text-lg', sub: 'text-[9px]' },
    md: { emblem: 34, text: 'text-xl', sub: 'text-[10px]' },
    lg: { emblem: 44, text: 'text-2xl', sub: 'text-xs' },
    xl: { emblem: 54, text: 'text-3xl sm:text-4xl', sub: 'text-xs sm:text-sm' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-2.5 group cursor-pointer ${className}`}>
      <NutcrackersEmblem size={currentSize.emblem} className="transition-transform duration-300 group-hover:scale-105" />
      <div className="flex flex-col">
        <span className={`font-extrabold tracking-tight text-white font-sans ${currentSize.text} leading-none flex items-center`}>
          Nutcrackers
          <span className="w-1.5 h-1.5 rounded-full bg-brand-teal ml-1 shadow-[0_0_8px_#2DD4BF]"></span>
        </span>
        {showSubtitle && (
          <span className={`text-brand-amber font-mono tracking-widest uppercase mt-1 font-semibold opacity-90 ${currentSize.sub}`}>
            AI & Digital Solutions
          </span>
        )}
      </div>
    </div>
  );
};
