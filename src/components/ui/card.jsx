export function Card({ className = "", children }) {
  return <div className={`bg-white rounded-lg border p-4 ${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }) {
  return <div className={`text-sm ${className}`}>{children}</div>;
}