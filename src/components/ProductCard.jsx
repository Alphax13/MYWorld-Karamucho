import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  const navigate = useNavigate();
    // ✅ Mockup ข้อมูลสินค้า
    const mockProducts = [
      {
        id: 1,
        logo: "/images/logo.png",
        image: "https://pub-db43af8979b24c69b0cd012deea952fd.r2.dev/1706633807",
        title: "แลก 39,000 COINS",
        description: "รับ MY FROSTY TUMBLER ฟรี 1 ชิ้น",
        price: "390",
      },
      {
        id: 2,
        logo: "/images/logo.png",
        image: "https://pub-db43af8979b24c69b0cd012deea952fd.r2.dev/1706633807",
        title: "แลก 29,000 COINS",
        description: "รับ MY WORLD CUP ฟรี 1 ชิ้น",
        price: "290",
      },
      {
        id: 3,
        logo: "/images/logo.png",
        image: "https://pub-db43af8979b24c69b0cd012deea952fd.r2.dev/1706633807",
        title: "แลก 19,000 COINS",
        description: "รับ MY EXCLUSIVE KEYCHAIN ฟรี 1 ชิ้น",
        price: "190",
      },
    ];
  
    return (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {mockProducts.map((product) => (
          <div
            key={product.id}
            className="flex items-center rounded-lg shadow-lg relative overflow-hidden 
                       bg-[url('/images/pattern.png')] bg-cover bg-no-repeat bg-center"
                       onClick={() => navigate("/boxset")}
          >
         
            <div className="flex justify-center items-center flex-[20%]">
              <img src={product.logo} alt="Logo" className="h-10 w-10 object-contain" />
            </div>
  

            <div className="flex justify-center items-center flex-[20%]">
              <img src={product.image} alt={product.title} className="h-28 object-contain" />
            </div>
  

            <div className="flex-[65%] pl-4">
              <h2 className="text-lg font-bold text-black">{product.title}</h2>
              <p className="text-black text-sm">{product.description}</p>
              <p className="text-black text-sm">{product.price} บาท</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductCard;
  