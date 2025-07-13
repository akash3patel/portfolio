import React from "react";

export function Badge({ children, className = "", variant = "default" }) {
  const styles =
    variant === "outline"
      ? "border border-gray-400 text-gray-800"
      : "bg-gray-800 text-white";
  return (
    <span className={`inline-block text-xs px-2 py-1 rounded ${styles} ${className}`}>
      {children}
    </span>
  );
}
