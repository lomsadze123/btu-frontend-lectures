import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import LecturePage from "./components/LecturePage";
import ShortcutsPage from "./components/ShortcutsPage";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/lectures/01" replace />} />
        <Route path="lectures/:id" element={<LecturePage />} />
        <Route path="shortcuts/:category" element={<ShortcutsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
