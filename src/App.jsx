import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BoxsetPage from "./pages/BoxsetPage";
import PrivilegePage from "./pages/PrivilegePage"; 
import CouponHistory from "./pages/CouponHistory";
import CheckInPage from "./pages/CheckInPage";
import CheckinPhoto from "./components/CheckIn/CheckinPhoto";
import CheckPoint from "./components/CheckPoint/CheckPoint"; 
import PonitPage from "./pages/PointPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/point" element={<PonitPage />} />
        <Route path="/boxset" element={<BoxsetPage />} />
        <Route path="/privilege/:id" element={<PrivilegePage />} />
        <Route path="/coupon-history" element={<CouponHistory />} />
        <Route path="/checkin" element={<CheckInPage />} />
        <Route path="/checkin-photo" element={<CheckinPhoto />} />
        <Route path="/checkpoint" element={<CheckPoint />} />
      </Routes>
    </Router>
  );
}

export default App;
