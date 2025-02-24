import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BoxsetPage from "./pages/BoxsetPage";
import PrivilegePage from "./pages/PrivilegePage"; // ✅ เพิ่มหน้า Privilege

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boxset" element={<BoxsetPage />} />
        <Route path="/privilege/:id" element={<PrivilegePage />} /> {/* ✅ เพิ่ม Route */}
      </Routes>
    </Router>
  );
}

export default App;
