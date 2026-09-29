import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'white';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'full',
  showTagline = true,
}) => {
  const isWhite = variant === 'white';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Authentic M.D. Security Winged Maharashtra Shield Logo from Brochure */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          className="w-12 h-12 drop-shadow-md transition-transform duration-300 hover:scale-105"
          viewBox="0 0 160 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Black Triangular Shield Base */}
          <polygon
            points="10,18 150,18 135,75 80,122 25,75"
            fill="#0F172A"
            stroke="#EA580C"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Inner Orange Arch Banner */}
          <path
            d="M20,24 Q80,15 140,24 L138,40 Q80,32 22,40 Z"
            fill="#EA580C"
          />

          {/* Banner Text: M D SECURITY */}
          <text
            x="80"
            y="33"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="9.5"
            fontWeight="900"
            fontFamily="system-ui, sans-serif"
            letterSpacing="0.8"
          >
            M D SECURITY
          </text>
          <text
            x="80"
            y="39"
            textAnchor="middle"
            fill="#FEF08A"
            fontSize="4.8"
            fontWeight="700"
            fontFamily="system-ui, sans-serif"
            letterSpacing="0.3"
          >
            Trusted. Everyday. Everywhere.
          </text>

          {/* Outstretched White Eagle Wings */}
          {/* Left Wing Feathers */}
          <path
            d="M75,68 C62,50 35,46 18,52 C32,58 45,63 56,76 C42,72 30,73 24,78 C38,82 52,86 65,88 C55,90 48,93 42,98 C58,98 70,88 78,74 Z"
            fill="#FFFFFF"
            stroke="#CBD5E1"
            strokeWidth="0.8"
          />
          {/* Right Wing Feathers */}
          <path
            d="M85,68 C98,50 125,46 142,52 C128,58 115,63 104,76 C118,72 130,73 136,78 C122,82 108,86 95,88 C105,90 112,93 118,98 C102,98 90,88 82,74 Z"
            fill="#FFFFFF"
            stroke="#CBD5E1"
            strokeWidth="0.8"
          />

          {/* Eagle Head & Body */}
          <path
            d="M80,48 L76,56 L73,59 L77,65 L80,72 L83,65 L87,59 L84,56 Z"
            fill="#FFFFFF"
          />
          <path
            d="M80,51 L77,55 L83,55 Z"
            fill="#EA580C"
          />

          {/* Maharashtra State Map Silhouette in Center (Orange) */}
          <path
            d="M75,64 C73,66 70,68 68,72 C68,76 71,78 72,83 C74,86 78,88 80,90 C83,87 87,86 89,82 C91,77 92,74 91,70 C88,67 85,65 82,63 C78,63 76,64 75,64 Z"
            fill="#EA580C"
            stroke="#FFFFFF"
            strokeWidth="0.8"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-display font-black tracking-tight text-xl sm:text-2xl ${
              isWhite ? 'text-white' : 'text-slate-900'
            }`}
          >
            M.D.
          </span>
          <span className="font-display font-black tracking-tight text-xl sm:text-2xl text-orange-500">
            SECURITY
          </span>
        </div>
        {showTagline && (
          <span
            className={`text-[9.5px] sm:text-[10px] tracking-wider font-semibold uppercase mt-0.5 ${
              isWhite ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Trusted. Everyday. Everywhere.
          </span>
        )}
      </div>
    </div>
  );
};
