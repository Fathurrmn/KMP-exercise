import React from 'react';

export default function KawungPattern({ className = "w-64 h-64 opacity-[0.035] text-primary" }) {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 200 200">
        <circle cx="100" cy="40" r="40" />
        <circle cx="100" cy="160" r="40" />
        <circle cx="40" cy="100" r="40" />
        <circle cx="160" cy="100" r="40" />
        <circle cx="100" cy="100" r="24" />
      </svg>
    </div>
  );
}

