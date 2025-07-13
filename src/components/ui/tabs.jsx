import React, { useState } from "react";

export function Tabs({ defaultValue, children, className }) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (child.type.displayName === "TabsList") {
          return React.cloneElement(child, { activeTab, setActiveTab });
        }
        if (child.props.value === activeTab) {
          return child;
        }
        return null;
      })}
    </div>
  );
}

export function TabsList({ children, activeTab, setActiveTab, className }) {
  return (
    <div className={className}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { activeTab, setActiveTab })
      )}
    </div>
  );
}
TabsList.displayName = "TabsList";

export function TabsTrigger({ value, children, activeTab, setActiveTab }) {
  return (
    <button
      className={`px-3 py-1 rounded ${
        value === activeTab ? "bg-blue-500 text-white" : "bg-gray-200"
      }`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children }) {
  return <div className="mt-2">{children}</div>;
}
