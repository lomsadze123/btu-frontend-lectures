import { type ReactNode } from "react";

interface ExerciseBlockProps {
  number: number;
  children: ReactNode;
}

const ExerciseBlock = ({ number, children }: ExerciseBlockProps) => {
  return (
    <div className="my-6 border-2 border-dashed border-indigo-300 rounded-lg p-5 bg-indigo-50">
      <div className="flex items-center gap-2 mb-2">
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-indigo-600 text-white text-sm font-bold">
          {number}
        </span>
        <h4 className="font-semibold text-indigo-800 text-lg">Exercise</h4>
      </div>
      <div className="text-gray-700">{children}</div>
    </div>
  );
};

export default ExerciseBlock;
