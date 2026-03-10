import { type ReactNode } from "react";

interface HomeworkBlockProps {
  children: ReactNode;
}

const HomeworkBlock = ({ children }: HomeworkBlockProps) => {
  return (
    <div className="my-8 border-2 border-orange-400 rounded-lg p-5 bg-orange-50">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">📝</span>
        <h4 className="font-bold text-orange-800 text-lg">
          Homework Assignment
        </h4>
      </div>
      <div className="text-gray-700">{children}</div>
    </div>
  );
};

export default HomeworkBlock;
