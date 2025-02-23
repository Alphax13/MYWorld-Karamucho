const BoxCard = ({ selectedStore }) => {
  // ✅ Mockup ข้อมูลสินค้า
  const mockProducts = [
    {
      id: 1,
      logo: "/images/logo.png",
      image: "/images/iconboxset.png",
      title: "แลก 15,000 COIN",
      description: "รับ My Box Set หมูกะทะ ฟรี 1 ชิ้น",
      price: "100",
      store: "ย่างเนย ลาดพร้าว",
    },
    {
      id: 2,
      logo: "/images/logo.png",
      image: "/images/iconboxset.png",
      title: "แลก 20,000 COIN",
      description: "รับ My Box Set พิเศษ ฟรี 1 ชิ้น",
      price: "150",
      store: "71 หมูกระทะ ลาดพร้าว 71",
    },
    {
      id: 3,
      logo: "/images/logo.png",
      image: "/images/iconboxset.png",
      title: "แลก 25,000 COIN",
      description: "รับ My Box Set VIP ฟรี 1 ชิ้น",
      price: "200",
      store: "ชาบูชิ รัชดา",
    },
  ];

  // ✅ กรองสินค้าเฉพาะร้านที่เลือก
  const filteredProducts = selectedStore
    ? mockProducts.filter((product) => product.store === selectedStore.label)
    : [];

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div
            key={product.id}
            className="flex items-center rounded-lg shadow-lg relative overflow-hidden 
                       bg-[url('/images/pattern.png')] bg-cover bg-no-repeat bg-center"
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
              <p className="text-black text-sm">เหลือราคา {product.price} บาท</p>
              <p className="text-gray-500 text-xs">{product.store}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 col-span-3">กรุณาเลือกร้านค้า</p>
      )}
    </div>
  );
};

export default BoxCard;
