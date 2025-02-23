import { useState } from "react";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import MenuTabs from "../components/MenuTabs";
import Tabs from "../components/Tabs";
import OrderHistory from "../components/OrderHistory";
import TradingHistory from "../components/TradingHistory";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [activeMenuTab, setActiveMenuTab] = useState("checkin"); // ใช้กับ MenuTabs
  const [activeSubTab, setActiveSubTab] = useState("trading"); // ใช้กับ Tabs

  return (
    <div className="min-h-screen m-0">
      <Navbar />
      <div className="flex flex-col items-center">
        {/* Profile + MenuTabs */}
        <ProfileCard />
        <MenuTabs activeTab={activeMenuTab} setActiveTab={setActiveMenuTab} />

        <div className="w-full max-w-5xl mt-1">
          {/* MenuTabs */}
          {activeMenuTab === "checkin" && <Banner />}
          {activeMenuTab === "redeem" && <OrderHistory />}
          {activeMenuTab === "history" && <TradingHistory />}
        </div>

        {/* Tabs */}
        <div className="w-full max-w-5xl mt-1">
          <Tabs activeTab={activeSubTab} setActiveTab={setActiveSubTab} />
          <div className="mt-4">
            {activeSubTab === "trading" && <ProductCard />}
            {activeSubTab === "tradingHistory" && <TradingHistory />}
            {activeSubTab === "orderHistory" && <OrderHistory />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
