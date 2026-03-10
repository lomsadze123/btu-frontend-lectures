import { NavLink } from "react-router-dom";
import { lectures, type LectureInfo } from "../data/lectures";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const sections: { label: string; key: LectureInfo["section"] }[] = [
  { label: "HTML & CSS", key: "HTML & CSS" },
  { label: "CSS Layout", key: "CSS Layout" },
  { label: "Tools", key: "Tools" },
  { label: "Exam", key: "Exam" },
  { label: "JavaScript", key: "JavaScript" },
];

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-30 h-full w-72 bg-gray-900 text-gray-100 overflow-y-auto transition-transform duration-300 lg:translate-x-0 lg:static lg:z-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 border-b border-gray-700">
          <h1 className="text-lg font-bold text-white">BTU Frontend</h1>
          <p className="text-sm text-gray-400 mt-1">Lecture Materials</p>
        </div>

        <nav className="p-3">
          {sections.map((section) => (
            <div key={section.key} className="mb-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 px-3 mb-2">
                {section.label}
              </h3>
              <ul className="space-y-1">
                {lectures
                  .filter((l) => l.section === section.key)
                  .map((lecture) => (
                    <li key={lecture.id}>
                      <NavLink
                        to={`/lectures/${lecture.id}`}
                        onClick={onClose}
                        className={({ isActive }) =>
                          `block px-3 py-2 rounded-md text-sm transition-colors ${
                            isActive
                              ? "bg-indigo-600 text-white"
                              : "text-gray-300 hover:bg-gray-800 hover:text-white"
                          }`
                        }
                      >
                        <span className="text-gray-500 mr-2">
                          {lecture.id}.
                        </span>
                        {lecture.title}
                      </NavLink>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
