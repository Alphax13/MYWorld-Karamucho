import { useNavigate } from "react-router-dom";
import React,{useState , useEffect} from "react";
import { useDispatch , useSelector } from "react-redux";
import { allCouponshow } from "../common/userSlice.js/userSlice";

const ProductCard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const CouponData = useSelector((state)=> state.user.allCouponshowsData)
  const { profile, customerinfo, isLoading, error } = useSelector((state) => state.user);

  useEffect(()=>{
    dispatch(allCouponshow())
  },[dispatch])

    // ✅ Mockup ข้อมูลสินค้า
    const mockProducts = [
      {
        id: 1,
        logo: "images/logo.png",
        image: "https://pub-db43af8979b24c69b0cd012deea952fd.r2.dev/1706633807",
        title: "แลก 39,000 COINS",
        description: "รับ MY FROSTY TUMBLER ฟรี 1 ชิ้น",
        price: "390",
      }
    ];
  
    return (
       <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 pt-0">
      {CouponData.map((product) => {
        // Check if customer points are less than product points
        const isDisabled = customerinfo?.point < product.point;

        return (
          <div
            key={product.id}
            className={`flex items-center rounded-lg shadow-lg relative overflow-hidden 
                       bg-[url('/images/pattern.png')] bg-cover bg-no-repeat bg-center ${isDisabled ? 'bg-gray-400 cursor-not-allowed' : ''}`}
            onClick={() => {
              if (!isDisabled) {
                navigate("/boxset", { state: { coupon_id: product?.coupon_id } });
              }
            }}
          >
            {/* <div className="flex justify-center items-center flex-[20%]">
              <img src="images/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
            </div> */}

            <div className="flex justify-center items-center flex-[45%]">
              <img
                src={!product.image_url ? product.image_url : "images/promotioncard.png"}
                alt={product.name}
                className="h-28 object-contain"
              />
            </div>

            <div className="flex-[65%] pl-4">
              <h2 className="text-lg font-bold text-black">{product.name}</h2>
              <p className="text-black text-sm">เหลือ {product.remaining} ชิ้น</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
  
  export default ProductCard;
  