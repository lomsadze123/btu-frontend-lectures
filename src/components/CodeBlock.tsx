import { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";

interface CodeBlockProps {
  code: string;
  language: "html" | "css" | "javascript";
  title?: string;
}

const languageMap: Record<string, string> = {
  html: "markup",
  css: "css",
  javascript: "javascript",
};

const CodeBlock = ({ code, language, title }: CodeBlockProps) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  const prismLanguage = languageMap[language] || language;

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-gray-700">
      {title && (
        <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-sm text-gray-300">
          <span>{title}</span>
          <button
            onClick={handleCopy}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            Copy
          </button>
        </div>
      )}
      {!title && (
        <div className="flex justify-end bg-gray-800 px-4 py-2">
          <button
            onClick={handleCopy}
            className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            Copy
          </button>
        </div>
      )}
      <pre className="bg-gray-900 p-4 overflow-x-auto m-0">
        <code ref={codeRef} className={`language-${prismLanguage}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
