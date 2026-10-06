import { useState } from "react";
import { NavLink } from "react-router-dom";
import { lectures, type LectureInfo } from "../data/lectures";
import { shortcutPages } from "../data/shortcuts";
import { gitTopics } from "../data/git";

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
  const [searchTerm, setSearchTerm] = useState("");

  const matchesSearch = (item: any, query: string) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase().trim();

    const inTitle = String(item.title || "").toLowerCase().includes(q);
    const inDescription = String(item.description || "").toLowerCase().includes(q);
    const inSection = String(item.section || "").toLowerCase().includes(q);

    let inTopics = false;
    if (Array.isArray(item.topics)) {
      inTopics = item.topics.some((t: any) => {
        if (typeof t === "string") return t.toLowerCase().includes(q);
        if (typeof t === "object" && t !== null) {
          return (
            String(t.title || "").toLowerCase().includes(q) ||
            String(t.description || "").toLowerCase().includes(q)
          );
        }
        return false;
      });
    }

    return inTitle || inDescription || inSection || inTopics;
  };

  const filteredLectures = (sectionKey: LectureInfo["section"]) =>
    lectures
      .filter((l) => l.section === sectionKey)
      .filter((l) => matchesSearch(l, searchTerm));

  const filteredShortcuts = shortcutPages.filter((page) =>
    matchesSearch(page, searchTerm)
  );

  const filteredGitTopics = gitTopics.filter((topic) =>
    matchesSearch(topic, searchTerm)
  );

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        id="sidebar"
        className={`fixed top-0 left-0 z-30 h-full w-72 bg-gray-900 text-gray-100 overflow-y-auto transition-transform duration-300 lg:translate-x-0 lg:sticky lg:top-0 lg:h-screen [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-gray-900 [&::-webkit-scrollbar-thumb]:bg-gray-700 [&::-webkit-scrollbar-thumb]:rounded-full ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 border-b border-gray-700">
          <NavLink to="/" onClick={onClose} className="block">
            <span className="text-lg font-bold text-white">BTU Frontend</span>
            <span className="block text-sm text-gray-400 mt-1">
              Lecture Materials
            </span>
          </NavLink>

          <div className="mt-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
            />
          </div>
        </div>

        <nav className="p-3" aria-label="Course navigation">
          {sections.map((section) => {
            const currentLectures = filteredLectures(section.key);
            if (currentLectures.length === 0) return null;

            return (
              <div key={section.key} className="mb-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 px-3 mb-2">
                  {section.label}
                </h3>
                <ul className="space-y-1">
                  {currentLectures.map((lecture) => (
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
            );
          })}

          {filteredShortcuts.length > 0 && (
            <div className="mb-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 px-3 mb-2">
                Shortcuts
              </h3>
              <ul className="space-y-1">
                {filteredShortcuts.map((page) => (
                  <li key={page.id}>
                    <NavLink
                      to={`/shortcuts/${page.id}`}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded-md text-sm transition-colors ${
                          isActive
                            ? "bg-indigo-600 text-white"
                            : "text-gray-300 hover:bg-gray-800 hover:text-white"
                        }`
                      }
                    >
                      {page.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {filteredGitTopics.length > 0 && (
            <div className="mb-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 px-3 mb-2">
                Git Basics
              </h3>
              <ul className="space-y-1">
                {filteredGitTopics.map((topic) => (
                  <li key={topic.id}>
                    <NavLink
                      to={`/git/${topic.id}`}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded-md text-sm transition-colors ${
                          isActive
                            ? "bg-indigo-600 text-white"
                            : "text-gray-300 hover:bg-gray-800 hover:text-white"
                        }`
                      }
                    >
                      {topic.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
