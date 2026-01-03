import { ReactNode } from "react";

interface CardProps {
  title?: string;
  description?: string;
  children: ReactNode;
}

export default function Card({ title, description, children }: CardProps) {
  return (
    <div className="rounded-lg border bg-white p-5 shadow-sm">
      {title && (
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
          {description && (
            <p className="text-xs text-gray-500">{description}</p>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
