
import React from "react";
export function Card({ className = "", children }) {
  return <div className={`rounded-xl border bg-white text-gray-900 ${className}`}>{children}</div>;
}
export function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
