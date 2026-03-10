import { useState, useRef, useEffect } from "react";

interface InteractivePlaygroundProps {
  initialCode: string;
  language?: "html" | "css" | "javascript";
  title?: string;
  height?: number;
}

const InteractivePlayground = ({
  initialCode,
  language = "html",
  title = "Try It Yourself!",
  height = 250,
}: InteractivePlaygroundProps) => {
  const [code, setCode] = useState(initialCode);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const getPreviewHtml = (src: string) => {
    if (language === "css") {
      return `<!DOCTYPE html><html><head><style>${src}</style></head><body><div class="demo">
        <h1>Hello World</h1><p>This is a paragraph.</p>
        <button>Click me</button><a href="#">A link</a>
      </div></body></html>`;
    }
    if (language === "javascript") {
      return `<!DOCTYPE html><html><head><style>
        body { font-family: system-ui; padding: 12px; margin: 0; }
        #output { white-space: pre-wrap; font-family: 'Fira Code', monospace; font-size: 13px; line-height: 1.6; }
        .log-line { padding: 2px 0; border-bottom: 1px solid #f0f0f0; }
        .error { color: #e06c75; }
      </style></head><body><div id="output"></div><script>
const _lines = [];
console.log = (...args) => {
  const text = args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ');
  _lines.push('<div class="log-line">' + text.replace(/</g,'&lt;') + '</div>');
  document.getElementById('output').innerHTML = _lines.join('');
};
try { ${src} } catch(e) { _lines.push('<div class="log-line error">Error: ' + e.message + '</div>'); document.getElementById('output').innerHTML = _lines.join(''); }
</script></body></html>`;
    }
    return src;
  };

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.srcdoc = getPreviewHtml(code);
    }
  }, [code, language]);

  const handleReset = () => setCode(initialCode);

  return (
    <div className="my-6 rounded-lg overflow-hidden border-2 border-indigo-500/30 playground">
      {/* Header */}
      <div className="flex items-center justify-between bg-indigo-900 px-4 py-2.5 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-lg">🎮</span>
          <span className="text-white font-medium">{title}</span>
        </div>
        <button
          onClick={handleReset}
          className="text-indigo-300 hover:text-white transition-colors cursor-pointer text-xs px-2 py-1 rounded border border-indigo-500/40 hover:border-indigo-400"
        >
          Reset
        </button>
      </div>

      {/* Editor + Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Code editor */}
        <div className="relative">
          <div className="bg-gray-800 px-3 py-1.5 text-xs text-gray-400 border-b border-gray-700 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            Editor — edit the code below
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck={false}
            className="w-full bg-gray-900 text-gray-100 p-4 font-mono text-sm leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500/50 border-0"
            style={{ height: `${height}px`, tabSize: 2 }}
          />
        </div>

        {/* Live preview */}
        <div className="border-t md:border-t-0 md:border-l border-gray-700">
          <div className="bg-gray-100 px-3 py-1.5 text-xs text-gray-500 border-b border-gray-200 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
            <span className="ml-1">Live Result</span>
          </div>
          <iframe
            ref={iframeRef}
            title="Playground Preview"
            className="w-full bg-white border-0"
            style={{ height: `${height + 26}px` }}
            sandbox="allow-scripts"
          />
        </div>
      </div>
    </div>
  );
};

export default InteractivePlayground;
