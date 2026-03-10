import { type ReactNode } from "react";

interface DiagramProps {
  title?: string;
  children: ReactNode;
}

const Diagram = ({ title, children }: DiagramProps) => {
  return (
    <div className="my-6 rounded-lg overflow-hidden border border-gray-200 bg-white">
      {title && (
        <div className="bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 border-b border-gray-200">
          {title}
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
};

export default Diagram;
