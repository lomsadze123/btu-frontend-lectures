import { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";

interface LivePreviewProps {
  code: string;
  language?: "html" | "css" | "javascript";
  title?: string;
  height?: number;
}

const languageMap: Record<string, string> = {
  html: "markup",
  css: "css",
  javascript: "javascript",
};

const LivePreview = ({
  code,
  language = "html",
  title,
  height = 200,
}: LivePreviewProps) => {
  const codeRef = useRef<HTMLElement>(null);
  const [tab, setTab] = useState<"both" | "code" | "preview">("both");

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language, tab]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  const prismLanguage = languageMap[language] || language;

  // Wrap CSS-only or JS-only code in a full HTML doc for preview
  let previewHtml = code;
  if (language === "css") {
    previewHtml = `<!DOCTYPE html><html><head><style>${code}</style></head><body></body></html>`;
  } else if (language === "javascript") {
    previewHtml = `<!DOCTYPE html><html><head></head><body><pre id="output"></pre><script>
const _log = [];
const _origLog = console.log;
console.log = (...args) => { _log.push(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ')); document.getElementById('output').textContent = _log.join('\\n'); };
${code}
</script></body></html>`;
  }

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-gray-700 live-preview">
      {/* Header */}
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-sm">
        <div className="flex items-center gap-1">
          {title && <span className="text-gray-300 mr-3">{title}</span>}
          <button
            onClick={() => setTab("both")}
            className={`px-2 py-1 rounded text-xs cursor-pointer transition-colors ${
              tab === "both"
                ? "bg-indigo-600 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Both
          </button>
          <button
            onClick={() => setTab("code")}
            className={`px-2 py-1 rounded text-xs cursor-pointer transition-colors ${
              tab === "code"
                ? "bg-indigo-600 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Code
          </button>
          <button
            onClick={() => setTab("preview")}
            className={`px-2 py-1 rounded text-xs cursor-pointer transition-colors ${
              tab === "preview"
                ? "bg-indigo-600 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Result
          </button>
        </div>
        <button
          onClick={handleCopy}
          className="text-gray-400 hover:text-white transition-colors cursor-pointer text-xs"
        >
          Copy
        </button>
      </div>

      {/* Content */}
      <div
        className={`${tab === "both" ? "grid grid-cols-1 md:grid-cols-2" : ""}`}
      >
        {/* Code panel */}
        {(tab === "both" || tab === "code") && (
          <pre className="bg-gray-900 p-4 overflow-x-auto m-0 max-h-96">
            <code ref={codeRef} className={`language-${prismLanguage}`}>
              {code}
            </code>
          </pre>
        )}

        {/* Preview panel */}
        {(tab === "both" || tab === "preview") && (
          <div className="bg-white border-t md:border-t-0 md:border-l border-gray-700">
            <div className="bg-gray-100 px-3 py-1 text-xs text-gray-500 border-b border-gray-200 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-2">Browser Preview</span>
            </div>
            <iframe
              srcDoc={previewHtml}
              title="Live Preview"
              className="w-full border-0"
              style={{ height: `${height}px` }}
              sandbox="allow-scripts"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LivePreview;
