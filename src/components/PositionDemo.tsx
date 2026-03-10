import { useState } from "react";

const PositionDemo = () => {
  const [position, setPosition] = useState<string>("static");
  const [top, setTop] = useState(20);
  const [left, setLeft] = useState(20);

  const options = [
    { value: "static", desc: "Default — follows normal document flow" },
    { value: "relative", desc: "Offset from its normal position" },
    {
      value: "absolute",
      desc: "Removed from flow, positioned relative to nearest positioned parent",
    },
    {
      value: "fixed",
      desc: "Positioned relative to the viewport (browser window)",
    },
    {
      value: "sticky",
      desc: "Toggles between relative and fixed based on scroll",
    },
  ];

  return (
    <div className="my-6 rounded-lg overflow-hidden border-2 border-amber-500/30 bg-gray-50 p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">📍</span>
        <h4 className="font-bold text-gray-800 text-lg">
          CSS Position — Interactive Demo
        </h4>
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setPosition(opt.value)}
            className={`px-3 py-1.5 rounded text-sm cursor-pointer transition-all ${
              position === opt.value
                ? "bg-amber-600 text-white shadow-md"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            {opt.value}
          </button>
        ))}
      </div>

      <p className="text-sm text-gray-600 mb-3 italic">
        {options.find((o) => o.value === position)?.desc}
      </p>

      {position !== "static" && position !== "sticky" && (
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-xs font-semibold text-gray-600">
              top: {top}px
            </label>
            <input
              type="range"
              min="-50"
              max="100"
              value={top}
              onChange={(e) => setTop(Number(e.target.value))}
              className="w-full accent-amber-500"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-600">
              left: {left}px
            </label>
            <input
              type="range"
              min="-50"
              max="200"
              value={left}
              onChange={(e) => setLeft(Number(e.target.value))}
              className="w-full accent-amber-500"
            />
          </div>
        </div>
      )}

      {/* Demo area */}
      <div
        className="bg-white rounded-lg border border-gray-200 p-4 relative overflow-hidden"
        style={{ height: "200px" }}
      >
        <div className="bg-gray-100 rounded px-3 py-2 text-gray-500 text-sm mb-2">
          I am a normal sibling element above.
        </div>

        <div className="relative inline-block">
          <div
            className="bg-amber-400 text-white px-4 py-2 rounded font-bold shadow-lg transition-all duration-300 z-10"
            style={{
              position: position as React.CSSProperties["position"],
              top:
                position !== "static" && position !== "sticky"
                  ? `${top}px`
                  : undefined,
              left:
                position !== "static" && position !== "sticky"
                  ? `${left}px`
                  : undefined,
            }}
          >
            I am positioned!
          </div>
        </div>

        <div className="bg-gray-100 rounded px-3 py-2 text-gray-500 text-sm mt-2">
          I am a normal sibling element below.
        </div>
      </div>

      <div className="mt-3 p-3 bg-gray-900 rounded text-xs font-mono text-gray-300">
        {`.element { position: ${position};${position !== "static" && position !== "sticky" ? ` top: ${top}px; left: ${left}px;` : ""} }`}
      </div>
    </div>
  );
};

export default PositionDemo;
