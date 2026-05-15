import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { shortcutPages, type OS } from "../data/shortcuts";
import Diagram from "./Diagram";
import InfoBox from "./InfoBox";

const ShortcutsPage = () => {
  const { category } = useParams<{ category: string }>();
  const [os, setOs] = useState<OS>("windows");

  const page = shortcutPages.find((p) => p.id === category);

  if (!page) {
    return <Navigate to="/lectures/01" replace />;
  }

  return (
    <article className="max-w-4xl mx-auto px-6 py-8">
      <div className="mb-8">
        <span className="text-sm font-medium text-indigo-600 uppercase tracking-wide">
          Shortcuts
        </span>
        <h1 className="text-3xl font-bold text-gray-900 mt-1">{page.title}</h1>
        <p className="text-gray-500 mt-2">{page.description}</p>
      </div>

      <div className="flex items-center gap-2 mb-8">
        <span className="text-sm text-gray-500 mr-1">OS:</span>
        <button
          onClick={() => setOs("windows")}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
            os === "windows"
              ? "bg-indigo-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Windows
        </button>
        <button
          onClick={() => setOs("mac")}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
            os === "mac"
              ? "bg-indigo-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          macOS
        </button>
      </div>

      {page.id === "terminal" && (
        <InfoBox type="info">
          Commands marked the same for both OS work identically on Windows (Command Prompt / PowerShell) and macOS / Linux Terminal.
        </InfoBox>
      )}

      {page.groups.map((group) => (
        <Diagram key={group.heading} title={group.heading}>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-gray-200">
                <th className="pb-2 font-semibold text-gray-600 w-1/2">Action</th>
                <th className="pb-2 font-semibold text-gray-600">Shortcut</th>
              </tr>
            </thead>
            <tbody>
              {group.items.map((item, i) => (
                <tr
                  key={item.action}
                  className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="py-2 pr-4 text-gray-700">{item.action}</td>
                  <td className="py-2">
                    <KeyCombo value={item[os]} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Diagram>
      ))}
    </article>
  );
};

const KeyCombo = ({ value }: { value: string }) => {
  if (value === "—") {
    return <span className="text-gray-400">—</span>;
  }

  const parts = value.split(/(\s*[,+]\s*)/).filter(Boolean);

  return (
    <span className="flex flex-wrap gap-1 items-center">
      {parts.map((part, i) => {
        const trimmed = part.trim();
        if (trimmed === "+" || trimmed === ",") {
          return (
            <span key={i} className="text-gray-400 text-xs">
              {trimmed}
            </span>
          );
        }
        return (
          <kbd
            key={i}
            className="inline-block px-1.5 py-0.5 bg-gray-100 border border-gray-300 rounded text-xs font-mono text-gray-800 shadow-sm"
          >
            {trimmed}
          </kbd>
        );
      })}
    </span>
  );
};

export default ShortcutsPage;
