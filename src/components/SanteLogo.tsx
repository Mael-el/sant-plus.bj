import React from 'react';
import { Zap } from 'lucide-react';

interface SanteLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export default function SanteLogo({ className = '', size = 'md', showSubtitle = true }: SanteLogoProps) {
  const iconSize = size === 'sm' ? 'w-7 h-7' : size === 'lg' ? 'w-11 h-11' : 'w-9 h-9';
  const textSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Colorful Health & Community Icon with Bitcoin Badge */}
      <div className={`relative ${iconSize} rounded-xl bg-[#008000] flex items-center justify-center text-white shadow-sm p-1.5 shrink-0`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 2v20M2 12h20" stroke="white" strokeWidth="3" />
          <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5" opacity="0.4" />
        </svg>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-white text-[#008000] rounded-full flex items-center justify-center border border-[#008000] shadow-xs">
        <Zap className="w-2.5 h-2.5 fill-[#008000]" />
        </span>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`${textSize} font-black text-[#059669] tracking-tight font-sans`}>
            Santé+
          </span>
          <span className="text-[10px] font-black uppercase tracking-wider text-[#008000] bg-white px-1.5 py-0.5 rounded border border-[#008000]">
            BTC
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] font-bold text-[#008000] tracking-tight -mt-0.5">
            Bénin • E-Santé
          </span>
        )}
      </div>
    </div>
  );
}
