import React from "react";

export const LogoSymbol = ({ className = "w-8 h-8", color = "text-teal-600" }: { className?: string, color?: string }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${color}`}
  >
    {/* Geometric Consensus Cross - formed by 4 overlapping petals/nodes */}
    <path
      d="M50 0C65 0 75 10 75 25V50H50C35 50 25 40 25 25C25 10 35 0 50 0Z"
      fill="currentColor"
    />
    <path
      d="M100 50C100 65 90 75 75 75H50V50C50 35 60 25 75 25C90 25 100 35 100 50Z"
      fill="currentColor"
      fillOpacity="0.8"
    />
    <path
      d="M50 100C35 100 25 90 25 75V50H50C65 50 75 60 75 75C75 90 65 100 50 100Z"
      fill="currentColor"
      fillOpacity="0.6"
    />
    <path
      d="M0 50C0 35 10 25 25 25H50V50C50 65 40 75 25 75C10 75 0 65 0 50Z"
      fill="currentColor"
      fillOpacity="0.4"
    />
    {/* Center node representing consensus */}
    <circle cx="50" cy="50" r="12" fill="white" />
  </svg>
);

export const LogoFull = ({ className = "h-8", symbolColor = "text-teal-600", textColor = "text-gray-900" }: { className?: string, symbolColor?: string, textColor?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <LogoSymbol className="w-8 h-8" color={symbolColor} />
    <div className={`font-display font-bold text-xl tracking-tight leading-none ${textColor}`}>
      Health<br/>
      <span className="font-light opacity-90">Experts</span>
    </div>
  </div>
);

export default LogoFull;
