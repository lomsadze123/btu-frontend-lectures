import { type ReactNode } from "react";

interface InfoBoxProps {
  type: "info" | "warning" | "tip";
  children: ReactNode;
}

const styles = {
  info: {
    border: "border-l-4 border-blue-500",
    bg: "bg-blue-50",
    icon: "💡",
    label: "Info",
  },
  warning: {
    border: "border-l-4 border-yellow-500",
    bg: "bg-yellow-50",
    icon: "⚠️",
    label: "Warning",
  },
  tip: {
    border: "border-l-4 border-green-500",
    bg: "bg-green-50",
    icon: "✅",
    label: "Tip",
  },
};

const InfoBox = ({ type, children }: InfoBoxProps) => {
  const s = styles[type];

  return (
    <div className={`my-6 ${s.border} ${s.bg} rounded-r-lg p-4`}>
      <div className="font-semibold text-gray-800 mb-1">
        {s.icon} {s.label}
      </div>
      <div className="text-gray-700">{children}</div>
    </div>
  );
};

export default InfoBox;
