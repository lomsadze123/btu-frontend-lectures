import { useState } from "react";

const FlexboxPlayground = () => {
  const [direction, setDirection] = useState("row");
  const [justify, setJustify] = useState("flex-start");
  const [alignItems, setAlignItems] = useState("stretch");
  const [wrap, setWrap] = useState("nowrap");
  const [gap, setGap] = useState(10);
  const [itemCount, setItemCount] = useState(4);

  const cssCode = `.container {
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${alignItems};
  flex-wrap: ${wrap};
  gap: ${gap}px;
}`;

  const colors = [
    "bg-red-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-purple-400",
    "bg-pink-400",
    "bg-orange-400",
    "bg-teal-400",
  ];

  const sizes = [
    { w: "w-16", h: "h-12" },
    { w: "w-20", h: "h-16" },
    { w: "w-14", h: "h-10" },
    { w: "w-24", h: "h-14" },
    { w: "w-16", h: "h-20" },
    { w: "w-20", h: "h-12" },
    { w: "w-14", h: "h-16" },
    { w: "w-18", h: "h-10" },
  ];

  return (
    <div className="my-6 rounded-lg overflow-hidden border-2 border-cyan-500/30 bg-gray-50 p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">🎯</span>
        <h4 className="font-bold text-gray-800 text-lg">Flexbox Playground</h4>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Controls */}
        <div className="space-y-3 lg:col-span-1">
          <div>
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
              flex-direction
            </label>
            <select
              value={direction}
              onChange={(e) => setDirection(e.target.value)}
              className="w-full mt-1 px-2 py-1.5 rounded border border-gray-300 text-sm bg-white"
            >
              <option value="row">row</option>
              <option value="row-reverse">row-reverse</option>
              <option value="column">column</option>
              <option value="column-reverse">column-reverse</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
              justify-content
            </label>
            <select
              value={justify}
              onChange={(e) => setJustify(e.target.value)}
              className="w-full mt-1 px-2 py-1.5 rounded border border-gray-300 text-sm bg-white"
            >
              <option value="flex-start">flex-start</option>
              <option value="flex-end">flex-end</option>
              <option value="center">center</option>
              <option value="space-between">space-between</option>
              <option value="space-around">space-around</option>
              <option value="space-evenly">space-evenly</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
              align-items
            </label>
            <select
              value={alignItems}
              onChange={(e) => setAlignItems(e.target.value)}
              className="w-full mt-1 px-2 py-1.5 rounded border border-gray-300 text-sm bg-white"
            >
              <option value="stretch">stretch</option>
              <option value="flex-start">flex-start</option>
              <option value="flex-end">flex-end</option>
              <option value="center">center</option>
              <option value="baseline">baseline</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
              flex-wrap
            </label>
            <select
              value={wrap}
              onChange={(e) => setWrap(e.target.value)}
              className="w-full mt-1 px-2 py-1.5 rounded border border-gray-300 text-sm bg-white"
            >
              <option value="nowrap">nowrap</option>
              <option value="wrap">wrap</option>
              <option value="wrap-reverse">wrap-reverse</option>
            </select>
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
              className="w-full accent-cyan-500"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
              Items: {itemCount}
            </label>
            <input
              type="range"
              min="1"
              max="8"
              value={itemCount}
              onChange={(e) => setItemCount(Number(e.target.value))}
              className="w-full accent-cyan-500"
            />
          </div>

          {/* Generated CSS */}
          <pre className="bg-gray-900 text-gray-300 p-3 rounded text-xs font-mono overflow-x-auto">
            {cssCode}
          </pre>
        </div>

        {/* Preview */}
        <div className="lg:col-span-2">
          <div
            className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 min-h-[250px] flex transition-all duration-300"
            style={{
              flexDirection: direction as React.CSSProperties["flexDirection"],
              justifyContent: justify,
              alignItems: alignItems,
              flexWrap: wrap as React.CSSProperties["flexWrap"],
              gap: `${gap}px`,
            }}
          >
            {Array.from({ length: itemCount }, (_, i) => (
              <div
                key={i}
                className={`${colors[i % colors.length]} ${alignItems === "stretch" ? sizes[i % sizes.length].w : `${sizes[i % sizes.length].w} ${sizes[i % sizes.length].h}`} rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-sm transition-all duration-300 shrink-0`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlexboxPlayground;
