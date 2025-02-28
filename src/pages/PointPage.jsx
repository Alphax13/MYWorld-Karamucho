import { useState } from "react";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import MenuTabs from "../components/MenuTabs";
import Tabs from "../components/Tabs";
import Redeem from "../components/Redeem";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import RedeemHistory from "../components/RedeemHistory";
import TradingHistory from "../components/TradingHistory";
import OrderHistory from "../components/OrderHistory";

const PonitPage = () => {
  const [activeMenuTab, setActiveMenuTab] = useState("checkin"); // ใช้กับ MenuTabs
  const [activeSubTab, setActiveSubTab] = useState("trading"); // ใช้กับ Tabs

  return (
    <div className="min-h-screen m-0">
      <Navbar />
      <div className="flex flex-col items-center">
        {/* Profile + MenuTabs */}
        <ProfileCard />
        <MenuTabs activeTab={activeMenuTab} setActiveTab={setActiveMenuTab} />

        <div className="w-full max-w-5xl">
          {/* MenuTabs */}
          {activeMenuTab === "checkin" && <Banner />}
          {activeMenuTab === "redeem" && <Redeem />}
          {activeMenuTab === "history" && <RedeemHistory />}
        </div>

        {/* Tabs */}
        <div className="w-full max-w-5xl">
          {/* <Tabs activeTab={activeSubTab} setActiveTab={setActiveSubTab} /> */}
          <div>
            {activeSubTab === "trading" && <ProductCard />}
            {activeSubTab === "tradingHistory" && <TradingHistory />}
            {activeSubTab === "orderHistory" && <OrderHistory />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PonitPage;
