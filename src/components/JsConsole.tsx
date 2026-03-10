import { useState } from "react";

interface JsConsoleProps {
  code: string;
  title?: string;
}

const JsConsole = ({ code, title = "JavaScript Console" }: JsConsoleProps) => {
  const [output, setOutput] = useState<string[]>([]);
  const [hasRun, setHasRun] = useState(false);

  const runCode = () => {
    const logs: string[] = [];
    const fakeConsole = {
      log: (...args: unknown[]) => {
        logs.push(
          args
            .map((a) =>
              typeof a === "object" ? JSON.stringify(a, null, 2) : String(a),
            )
            .join(" "),
        );
      },
    };

    try {
      const fn = new Function("console", code);
      fn(fakeConsole);
    } catch (e) {
      logs.push(`❌ Error: ${(e as Error).message}`);
    }

    setOutput(logs);
    setHasRun(true);
  };

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-gray-700">
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-sm">
        <span className="text-gray-300 flex items-center gap-2">
          <span className="text-yellow-400">⚡</span> {title}
        </span>
        <button
          onClick={runCode}
          className="px-3 py-1 bg-green-600 hover:bg-green-500 text-white text-xs rounded cursor-pointer transition-colors font-medium"
        >
          ▶ Run
        </button>
      </div>

      <pre className="bg-gray-900 p-4 overflow-x-auto m-0 text-sm text-gray-300 font-mono">
        {code}
      </pre>

      {hasRun && (
        <div className="bg-gray-950 border-t border-gray-700 p-4">
          <div className="text-xs text-gray-500 mb-2 uppercase tracking-wide font-semibold">
            Output:
          </div>
          {output.length > 0 ? (
            output.map((line, i) => (
              <div
                key={i}
                className="text-sm font-mono text-green-400 py-0.5 border-b border-gray-800 last:border-0"
              >
                {line}
              </div>
            ))
          ) : (
            <div className="text-sm font-mono text-gray-500 italic">
              (no output)
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default JsConsole;
