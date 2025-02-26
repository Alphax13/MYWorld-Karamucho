import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BoxsetPage from "./pages/BoxsetPage";
import PrivilegePage from "./pages/PrivilegePage"; 
import CouponHistory from "./pages/CouponHistory";
import CheckInPage from "./pages/CheckInPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boxset" element={<BoxsetPage />} />
        <Route path="/privilege/:id" element={<PrivilegePage />} /> 
        <Route path="/coupon-history" element={<CouponHistory />} />
        <Route path="/checkin" element={<CheckInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
