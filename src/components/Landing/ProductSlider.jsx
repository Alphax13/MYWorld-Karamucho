import { useRef } from "react";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";

const ProductSlider = () => {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  const products = [
    { img: "Product/1.png", name: "MY Snack Cup (MY World x คารามูโจ้ Collection)", price: "129 THB" },
    { img: "Product/2.png", name: "MY Frosty Tumbler (MY World x คารามูโจ้ Collection) (Pre-Order)", price: "109 THB" },
    { img: "Product/3.png", name: "MY Karamucho Bag (MY World x คารามูโจ้ Collection) ", price: "109 THB" },
  ];

  return (
    <section className="relative bg-gradient-to-b from-black to-gray-900 text-white py-10">
      {/* Top Background Image */}
      <div className="absolute top-0 left-0 w-full h-32 z-0">
        <img 
          src="images/top.png" 
          alt="Top Background" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Bottom Background Image */}
      <div className="absolute bottom-0 left-0 w-full h-32 z-0">
        <img 
          src="images/bottom.png" 
          alt="Bottom Background" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center px-4 lg:px-8 py-4 gap-6">
        <div className="flex-shrink-0">
          <a href="https://www.myworld-store.com/" target="_blank" rel="myworld">
            <img src="images/presenter.png" alt="Presenter" className="w-full h-auto max-w-sm" />
          </a>
        </div>
        <div className="flex-1 text-center md:text-left">
          <img src="images/Collection.png" alt="Collection" className="w-full max-w-md mx-auto md:mx-0 mb-4" />
          <h2 className="text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed">
            ลิมิเต็ดอิดิชั่นที่สร้างมาเพื่อแฟนตัวจริงของความมันส์! การรวมพลังครั้งนี้ไม่ใช่แค่ของสะสม แต่คือสัญลักษณ์ของการคอนเนคทุกไอเดีย สนุก เผ็ด มันส์ ในแบบที่เป็นคุณ รีบจับจองก่อนจะกลายเป็น Rare Item!
          </h2>
          <div className="w-full border-b-2 border-gray-300 mt-6"></div>
        </div>
      </div>

      {/* Product Slider Section */}
      <div className="relative mt-12 z-10">
        {/* Desktop Navigation Buttons */}
        <button 
          className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-all duration-300"
          onClick={slideLeft}
        >
          <IoArrowBackCircleOutline className="w-8 h-8 text-white" />
        </button>
        
        <button 
          className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-all duration-300"
          onClick={slideRight}
        >
          <IoArrowForwardCircleOutline className="w-8 h-8 text-white" />
        </button>

        {/* Desktop Slider Container */}
        <div 
          className="hidden md:flex overflow-x-auto gap-4 px-8 py-4 scroll-smooth scrollbar-hide snap-x snap-mandatory"
          ref={sliderRef}
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {products.map((product, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-64 bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 snap-start"
            >
              <img 
                src={product.img} 
                alt={product.name} 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-white line-clamp-2 leading-tight">
                  {product.name}
                </h3>
                <p className="text-lg font-bold text-sky-300">
                  {product.price}
                </p>
              </div>
              <div className="mt-4 flex justify-center">
                <a href="https://shop.line.me/@myworld" className="inline-block">
                  <img src="images/cart-button.png" alt="Cart" className="w-12 h-12 hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Single Column Layout */}
        <div className="block md:hidden px-4 space-y-6">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="w-full p-6 shadow-lg"
            >
              <img 
                src={product.img} 
                alt={product.name} 
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="space-y-4 bg-black p-4">
                <h3 className="text-lg font-semibold text-white leading-tight">
                  {product.name}
                </h3>
                <p className="text-xl font-bold text-sky-300">
                  {product.price}
                </p>
              </div>
              <div className="mt-6 flex justify-center">
                <a href="https://shop.line.me/@myworld" className="inline-block">
                  <img src="images/cart-button.png" alt="Cart" className="w-14 h-14 hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="relative z-10 flex justify-center mt-12">
        <button className="bg-transparent border-2 border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
          <a href="https://shop.line.me/@myworld">ดูสินค้าทันที</a>
        </button>
      </div>

      {/* Footer */}
      <div className="relative z-10 text-center mt-8">
        <h1 className="text-sky-400 text-lg md:text-xl font-bold">2024 MY WORLD #ALWAYS CONNECTED</h1>
      </div>
    </section>
  );
};

export default ProductSlider;
