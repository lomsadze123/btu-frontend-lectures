import { type ReactNode, useEffect } from "react";
import { Link } from "react-router-dom";
import { lectures } from "../data/lectures";

interface LectureWrapperProps {
  id: string;
  title: string;
  children: ReactNode;
}

const LectureWrapper = ({ id, title, children }: LectureWrapperProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const currentIndex = lectures.findIndex((l) => l.id === id);
  const prev = currentIndex > 0 ? lectures[currentIndex - 1] : null;
  const next =
    currentIndex < lectures.length - 1 ? lectures[currentIndex + 1] : null;

  return (
    <article className="max-w-4xl mx-auto px-6 py-8">
      <div className="mb-8">
        <span className="text-sm font-medium text-indigo-600 uppercase tracking-wide">
          Lecture {id}
        </span>
        <h1 className="text-3xl font-bold text-gray-900 mt-1">{title}</h1>
      </div>

      <div className="lecture-content">{children}</div>

      <nav className="flex justify-between items-center mt-12 pt-6 border-t border-gray-200">
        {prev ? (
          <Link
            to={`/lectures/${prev.id}`}
            className="flex flex-col items-start text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <span className="text-sm text-gray-500">Previous</span>
            <span className="font-medium">
              &larr; {prev.id}. {prev.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            to={`/lectures/${next.id}`}
            className="flex flex-col items-end text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <span className="text-sm text-gray-500">Next</span>
            <span className="font-medium">
              {next.id}. {next.title} &rarr;
            </span>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </article>
  );
};

export default LectureWrapper;
