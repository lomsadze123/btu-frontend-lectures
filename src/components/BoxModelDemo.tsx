import { useState } from "react";

const BoxModelDemo = () => {
  const [margin, setMargin] = useState(20);
  const [border, setBorder] = useState(5);
  const [padding, setPadding] = useState(30);
  const [width, setWidth] = useState(150);
  const [boxSizing, setBoxSizing] = useState<"content-box" | "border-box">(
    "content-box"
  );

  const totalWidth =
    boxSizing === "content-box"
      ? width + padding * 2 + border * 2 + margin * 2
      : width + margin * 2;

  const innerContentWidth =
    boxSizing === "content-box"
      ? width
      : Math.max(0, width - padding * 2 - border * 2);

  return (
    <div className="my-6 rounded-lg overflow-hidden border-2 border-purple-500/30 bg-gray-50 p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">📦</span>
        <h4 className="font-bold text-gray-800 text-lg">
          Interactive Box Model
        </h4>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Controls */}
        <div className="space-y-3">
          <div>
            <label className="flex items-center justify-between text-sm font-medium text-gray-700">
              <span>
                Margin: <strong className="text-orange-600">{margin}px</strong>
              </span>
            </label>
            <input
              type="range"
              min="0"
              max="50"
              value={margin}
              onChange={(e) => setMargin(Number(e.target.value))}
              className="w-full accent-orange-500"
            />
          </div>
          <div>
            <label className="flex items-center justify-between text-sm font-medium text-gray-700">
              <span>
                Border: <strong className="text-yellow-600">{border}px</strong>
              </span>
            </label>
            <input
              type="range"
              min="0"
              max="20"
              value={border}
              onChange={(e) => setBorder(Number(e.target.value))}
              className="w-full accent-yellow-500"
            />
          </div>
          <div>
            <label className="flex items-center justify-between text-sm font-medium text-gray-700">
              <span>
                Padding:{" "}
                <strong className="text-green-600">{padding}px</strong>
              </span>
            </label>
            <input
              type="range"
              min="0"
              max="60"
              value={padding}
              onChange={(e) => setPadding(Number(e.target.value))}
              className="w-full accent-green-500"
            />
          </div>
          <div>
            <label className="flex items-center justify-between text-sm font-medium text-gray-700">
              <span>
                Width: <strong className="text-blue-600">{width}px</strong>
              </span>
            </label>
            <input
              type="range"
              min="50"
              max="250"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
              className="w-full accent-blue-500"
            />
          </div>
          <div className="flex items-center gap-3 pt-2">
            <label className="text-sm font-medium text-gray-700">
              box-sizing:
            </label>
            <button
              onClick={() => setBoxSizing("content-box")}
              className={`px-3 py-1 rounded text-sm cursor-pointer transition-colors ${boxSizing === "content-box" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-600"}`}
            >
              content-box
            </button>
            <button
              onClick={() => setBoxSizing("border-box")}
              className={`px-3 py-1 rounded text-sm cursor-pointer transition-colors ${boxSizing === "border-box" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-600"}`}
            >
              border-box
            </button>
          </div>

          <div className="mt-3 p-3 bg-white rounded-lg border text-sm font-mono">
            <div className="text-gray-500">
              Total space: <strong className="text-gray-900">{totalWidth}px</strong>
            </div>
            <div className="text-gray-500">
              Content area:{" "}
              <strong className="text-gray-900">{innerContentWidth}px</strong>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="flex items-center justify-center">
          <div className="relative">
            {/* Margin layer */}
            <div
              className="bg-orange-200/60 flex items-center justify-center transition-all duration-300"
              style={{ padding: `${margin}px` }}
            >
              <span className="absolute top-1 left-1 text-[10px] text-orange-700 font-medium">
                margin
              </span>
              {/* Border layer */}
              <div
                className="bg-yellow-300/70 flex items-center justify-center transition-all duration-300"
                style={{ padding: `${border}px` }}
              >
                {/* Padding layer */}
                <div
                  className="bg-green-200/70 flex items-center justify-center transition-all duration-300"
                  style={{ padding: `${padding}px` }}
                >
                  {/* Content */}
                  <div
                    className="bg-blue-400/70 flex items-center justify-center text-white text-xs font-bold transition-all duration-300 rounded"
                    style={{
                      width: `${innerContentWidth}px`,
                      height: "60px",
                    }}
                  >
                    Content
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxModelDemo;
