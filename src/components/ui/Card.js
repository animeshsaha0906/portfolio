// src/components/ui/Card.js
import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-2xl border border-white/40 bg-white/80 p-6 shadow-xl shadow-black/5 backdrop-blur transition dark:border-white/10 dark:bg-gray-900/70 ${className}`}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children }) => {
  return <div className="space-y-3">{children}</div>;
};

export default Card;
