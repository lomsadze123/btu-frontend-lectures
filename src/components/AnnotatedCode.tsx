import { useState } from "react";

interface CodeSegment {
  code: string;
  annotation?: string;
  label?: string;
}

interface AnnotatedCodeProps {
  segments: CodeSegment[];
  title?: string;
}

const AnnotatedCode = ({ segments, title }: AnnotatedCodeProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-gray-700">
      {title && (
        <div className="bg-gray-800 px-4 py-2 text-sm text-gray-300 flex items-center gap-2">
          <span className="text-indigo-400">{"</>"}</span>
          {title}
          <span className="ml-auto text-xs text-gray-500">
            click highlighted parts to explore
          </span>
        </div>
      )}

      <div className="bg-gray-900 p-4 font-mono text-sm leading-relaxed">
        {segments.map((seg, i) => {
          const hasAnnotation = !!seg.annotation;
          const isActive = activeIndex === i;

          return (
            <span
              key={i}
              onClick={
                hasAnnotation
                  ? () => setActiveIndex(isActive ? null : i)
                  : undefined
              }
              className={`
                ${hasAnnotation ? "cursor-pointer transition-all duration-200 rounded-sm" : ""}
                ${isActive ? "bg-indigo-500/30 ring-1 ring-indigo-400/50" : ""}
                ${hasAnnotation && !isActive ? "hover:bg-gray-800 border-b border-dashed border-gray-600" : ""}
              `}
              style={{ whiteSpace: "pre" }}
            >
              {hasAnnotation && !isActive && (
                <span className="text-[10px] text-indigo-400/60 align-super select-none">
                  {seg.label ? ` ${seg.label}` : " ?"}
                </span>
              )}
              <span
                className={
                  isActive ? "text-indigo-300" : hasAnnotation ? "text-gray-200" : "text-gray-400"
                }
              >
                {seg.code}
              </span>
            </span>
          );
        })}
      </div>

      {/* Annotation panel */}
      {activeIndex !== null && segments[activeIndex]?.annotation && (
        <div className="border-t-2 border-sky-400 bg-sky-50 px-5 py-4 flex gap-3 items-start">
          <span className="text-sky-500 text-lg mt-0.5 shrink-0">
            &#9656;
          </span>
          <div>
            {segments[activeIndex].label && (
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wide block mb-1.5">
                {segments[activeIndex].label}
              </span>
            )}
            <p className="text-sm text-gray-700 leading-relaxed m-0">
              {segments[activeIndex].annotation}
            </p>
          </div>
          <button
            onClick={() => setActiveIndex(null)}
            className="ml-auto text-gray-400 hover:text-gray-600 cursor-pointer text-xs shrink-0 mt-0.5"
          >
            &#10005;
          </button>
        </div>
      )}
    </div>
  );
};

export default AnnotatedCode;
