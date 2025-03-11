import { useState, useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import MenuTabs from "../components/MenuTabs";
import Redeem from "../components/Redeem";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import RedeemHistory from "../components/RedeemHistory";
import { useNavigate } from "react-router-dom";
import RegisterEvent from "./RegisterEvent";
import { getuser , loginWithLine } from "../common/userSlice.js/userSlice";
import MobileMenu from "../components/Landing/MobileMenu";

const PonitPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profile, customerinfo, isLoading, error } = useSelector((state) => state.user);
  const [activeMenuTab, setActiveMenuTab] = useState("checkin"); // ใช้กับ MenuTabs
  const [showregister , setshowregister] = useState(false)

  useEffect(() => {
    document.title = "Point";
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // ทำให้หน้าอยู่บนสุดเสมอเมื่อเข้า
  }, []);

  useEffect(()=>{
    console.log(customerinfo);
  },[customerinfo])

  useEffect(() => {
      if (!profile){
        dispatch(loginWithLine())
      }else if (!customerinfo) {
        dispatch(getuser({ profile }));
      }else if (!customerinfo?.first_name){
        navigate('/RegisterEvent', { state: { from: '/point' } });
      }
    }, [dispatch, customerinfo, profile]);

    console.log(customerinfo)

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
        {!((activeMenuTab === "redeem") || (activeMenuTab === "history")) && <ProductCard />}
        <MobileMenu />
      </div>
    </div>
  );
};

export default PonitPage;