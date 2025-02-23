import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BoxsetPage from "./pages/BoxsetPage"; // หน้า Boxset
import MymapPage from "./pages/MymapPage"; // หน้า Mymap

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boxset" element={<BoxsetPage />} />
        <Route path="/mymap" element={<MymapPage />} />
      </Routes>
    </Router>
  );
}

export default App;
