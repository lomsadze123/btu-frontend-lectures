import { useState } from "react";

const DisplayDemo = () => {
  const [display, setDisplay] = useState<string>("block");

  const options = [
    {
      value: "block",
      label: "block",
      desc: "Takes full width, stacks vertically",
    },
    {
      value: "inline",
      label: "inline",
      desc: "Flows with text, no width/height control",
    },
    {
      value: "inline-block",
      label: "inline-block",
      desc: "Flows inline BUT respects width/height",
    },
    { value: "none", label: "none", desc: "Disappears completely" },
  ];

  return (
    <div className="my-6 rounded-lg overflow-hidden border-2 border-emerald-500/30 bg-gray-50 p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">🧱</span>
        <h4 className="font-bold text-gray-800 text-lg">
          Display Types — See the Difference
        </h4>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setDisplay(opt.value)}
            className={`px-3 py-1.5 rounded text-sm cursor-pointer transition-all ${
              display === opt.value
                ? "bg-emerald-600 text-white shadow-md"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <p className="text-sm text-gray-600 mb-3 italic">
        {options.find((o) => o.value === display)?.desc}
      </p>

      {/* Demo area */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <p className="text-gray-700 leading-relaxed">
          Here is some text before the elements.{" "}
          <span
            className="bg-red-200 text-red-800 font-medium px-2 py-1 border border-red-400 transition-all"
            style={{
              display: display,
              width: display === "inline" ? undefined : "120px",
              height: display === "inline" ? undefined : "40px",
            }}
          >
            Box A
          </span>
          <span
            className="bg-blue-200 text-blue-800 font-medium px-2 py-1 border border-blue-400 transition-all"
            style={{
              display: display,
              width: display === "inline" ? undefined : "120px",
              height: display === "inline" ? undefined : "40px",
            }}
          >
            Box B
          </span>
          <span
            className="bg-green-200 text-green-800 font-medium px-2 py-1 border border-green-400 transition-all"
            style={{
              display: display,
              width: display === "inline" ? undefined : "120px",
              height: display === "inline" ? undefined : "40px",
            }}
          >
            Box C
          </span>{" "}
          and here is some text after the elements.
        </p>
      </div>

      <div className="mt-3 p-3 bg-gray-900 rounded text-xs font-mono text-gray-300">
        {`.element { display: ${display}; ${display !== "inline" ? "width: 120px; height: 40px; " : ""}}`}
      </div>
    </div>
  );
};

export default DisplayDemo;
