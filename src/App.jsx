import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BoxsetPage from "./pages/BoxsetPage";
import PrivilegePage from "./pages/PrivilegePage"; 
import CouponHistory from "./pages/CouponHistory";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boxset" element={<BoxsetPage />} />
        <Route path="/privilege/:id" element={<PrivilegePage />} /> 
        <Route path="/coupon-history" element={<CouponHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
