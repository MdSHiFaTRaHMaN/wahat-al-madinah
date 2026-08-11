import React from 'react';

export default function Logo({ size = "md", light = false }) {
  const isLarge = size === "lg";
  const isSmall = size === "sm";

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Brand Icon SVG matching exact logo emblem */}
      <div className={`relative flex items-center justify-center shrink-0 ${isLarge ? 'w-14 h-14' : isSmall ? 'w-9 h-9' : 'w-11 h-11'}`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          {/* Outer Emerald Ring */}
          <path
            d="M 50 15 A 35 35 0 1 0 85 50"
            stroke="#004B38"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <path
            d="M 15 50 A 35 35 0 0 0 50 85"
            stroke="#004B38"
            strokeWidth="12"
            strokeLinecap="round"
          />
          {/* Inner Golden Arch/Bowl */}
          <path
            d="M 32 50 C 32 68, 68 68, 68 50 C 68 35, 32 35, 32 50 Z"
            fill="url(#goldGradient)"
          />
          {/* Top Emerald Circle Dot */}
          <circle cx="50" cy="22" r="9" fill="#004B38" />
          
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#E5B942" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5 font-bold tracking-tight">
          <span className={`font-black ${light ? 'text-white' : 'text-brand-green'} ${isLarge ? 'text-2xl' : isSmall ? 'text-base' : 'text-xl'}`}>
            Wahat
          </span>
          <span className={`font-bold ${isLarge ? 'text-2xl' : isSmall ? 'text-base' : 'text-xl'} gold-gradient-text`}>
            Al-Madinah
          </span>
          <span className="mr-1 font-tajawal font-bold text-xs px-2 py-0.5 rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/20">
            واحة المدينة
          </span>
        </div>
        <span className={`font-medium tracking-wide text-[10px] sm:text-[11px] ${light ? 'text-emerald-100/80' : 'text-slate-500'} uppercase border-t border-brand-gold/30 pt-0.5 mt-0.5`}>
          BUYING USED FURNITURE & SCRAP • لشراء الأثاث المستعمل
        </span>
      </div>
    </div>
  );
}
