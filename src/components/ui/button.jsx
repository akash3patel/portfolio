import React from "react";

export function Button({ children, asChild = false, ...props }) {
  if (asChild) {
    return (
      <span {...props} className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        {children}
      </span>
    );
  }
  return (
    <button {...props} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      {children}
    </button>
  );
}
