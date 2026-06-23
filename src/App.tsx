import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import LecturePage from "./components/LecturePage";
import ShortcutsPage from "./components/ShortcutsPage";
import GitPage from "./components/GitPage";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/lectures/01" replace />} />
        <Route path="lectures/:id" element={<LecturePage />} />
        <Route path="shortcuts/:category" element={<ShortcutsPage />} />
        <Route path="git/:topic" element={<GitPage />} />
      </Route>
    </Routes>
  );
};

export default App;
