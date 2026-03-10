import { useState } from "react";

const GridPlayground = () => {
  const [cols, setCols] = useState("1fr 1fr 1fr");
  const [rows, setRows] = useState("auto");
  const [gap, setGap] = useState(10);
  const [itemCount, setItemCount] = useState(6);

  const presets = [
    { label: "3 Equal", value: "1fr 1fr 1fr" },
    { label: "2 Equal", value: "1fr 1fr" },
    { label: "Sidebar + Main", value: "250px 1fr" },
    { label: "Holy Grail", value: "200px 1fr 200px" },
    { label: "4 Columns", value: "repeat(4, 1fr)" },
    { label: "Auto-fill", value: "repeat(auto-fill, minmax(100px, 1fr))" },
  ];

  const colors = [
    "bg-violet-400",
    "bg-sky-400",
    "bg-emerald-400",
    "bg-amber-400",
    "bg-rose-400",
    "bg-teal-400",
    "bg-indigo-400",
    "bg-orange-400",
    "bg-cyan-400",
  ];

  const cssCode = `.grid-container {
  display: grid;
  grid-template-columns: ${cols};
  grid-template-rows: ${rows};
  gap: ${gap}px;
}`;

  return (
    <div className="my-6 rounded-lg overflow-hidden border-2 border-violet-500/30 bg-gray-50 p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">🔲</span>
        <h4 className="font-bold text-gray-800 text-lg">Grid Playground</h4>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Controls */}
        <div className="space-y-3 lg:col-span-1">
          <div>
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
              grid-template-columns
            </label>
            <input
              type="text"
              value={cols}
              onChange={(e) => setCols(e.target.value)}
              className="w-full mt-1 px-2 py-1.5 rounded border border-gray-300 text-sm bg-white font-mono"
            />
          </div>

          <div className="flex flex-wrap gap-1.5">
            {presets.map((p) => (
              <button
                key={p.label}
                onClick={() => setCols(p.value)}
                className={`px-2 py-1 rounded text-xs cursor-pointer transition-colors ${cols === p.value ? "bg-violet-600 text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300"}`}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
              grid-template-rows
            </label>
            <input
              type="text"
              value={rows}
              onChange={(e) => setRows(e.target.value)}
              className="w-full mt-1 px-2 py-1.5 rounded border border-gray-300 text-sm bg-white font-mono"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
              gap: {gap}px
            </label>
            <input
              type="range"
              min="0"
              max="30"
              value={gap}
              onChange={(e) => setGap(Number(e.target.value))}
              className="w-full accent-violet-500"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
              Items: {itemCount}
            </label>
            <input
              type="range"
              min="1"
              max="9"
              value={itemCount}
              onChange={(e) => setItemCount(Number(e.target.value))}
              className="w-full accent-violet-500"
            />
          </div>

          <pre className="bg-gray-900 text-gray-300 p-3 rounded text-xs font-mono overflow-x-auto">
            {cssCode}
          </pre>
        </div>

        {/* Preview */}
        <div className="lg:col-span-2">
          <div
            className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 min-h-[250px] transition-all duration-300"
            style={{
              display: "grid",
              gridTemplateColumns: cols,
              gridTemplateRows: rows,
              gap: `${gap}px`,
            }}
          >
            {Array.from({ length: itemCount }, (_, i) => (
              <div
                key={i}
                className={`${colors[i % colors.length]} rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-sm p-4 min-h-[60px] transition-all duration-300`}
              >
                Item {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridPlayground;
