import { useRef } from "react";
import { motion } from "framer-motion";
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
    { 
      img: "Product/1.png", 
      name: "MY Karamucho Bag (MY x Karamucho Collection)", 
      price: "129 THB",
      link: "https://shop.line.me/@myworld/product/1007627975"
    },
    { 
      img: "Product/2.png", 
      name: "MY Frosty Tumbler (MY x Karamucho Collection) (Pre-Order)", 
      price: "390 THB",
      link: "https://shop.line.me/@myworld/product/1007622610"
    },
    { 
      img: "Product/3.png", 
      name: "MY Snack Cup (MY x Karamucho Collection)", 
      price: "109 THB",
      link: "https://shop.line.me/@myworld/product/1007628035"
    },
    { 
      img: "Product/4.jpg", 
      name: "ขนม คารามูโจ้ ( 40 กรัม × 24 ซอง )", 
      price: "456 THB",
      link: "https://shop.line.me/@myworld/product/1007697414"
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-gray-700 text-white py-10">
      {/* Bottom Background Image */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img 
          src="images/sm2.png" 
          alt="Bottom Background" 
          className="w-full h-full object-cover object-bottom opacity-50"
        />
      </div>

      {/* Presenter Image - Edge to Edge */}
      <motion.div 
        className="relative z-10 w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Presenter Image with Motion */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center px-4 lg:px-8 py-4 gap-8">
          {/* Left Column - Presenter Image */}
          <motion.div className="flex-1 flex justify-center lg:justify-start">
            <motion.a 
              rel="myworld"
              className="relative z-10 block"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.img 
                src="images/presenter.png" 
                alt="Presenter" 
                className="w-full h-auto relative z-10 max-w-lg mx-auto" 
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ 
                  scale: 1, 
                  opacity: 1,
                  transition: { 
                    duration: 1.0, 
                    delay: 0.2,
                    ease: "easeOut" 
                  }
                }}
                viewport={{ once: true, amount: 0.3 }}
                animate={{ 
                  y: [0, -5, 0],
                  transition: { 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }
                }}
              />
            </motion.a>
          </motion.div>

          {/* Right Column - Content Section */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.img 
              src="images/Collection.png" 
              alt="Collection" 
              className="w-full max-w-md mx-auto lg:mx-0 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.h2 
              className="text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              ลิมิเต็ดอิดิชั่นที่สร้างมาเพื่อแฟนตัวจริงของความมันส์! การรวมพลังครั้งนี้ไม่ใช่แค่ของสะสม แต่คือสัญลักษณ์ของการคอนเนคทุกไอเดีย สนุก เผ็ด มันส์ ในแบบที่เป็นคุณ รีบจับจองก่อนจะกลายเป็น Rare Item!
            </motion.h2>
            <motion.div 
              className="w-full border-b-2 border-gray-300 mt-6"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            ></motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Product Slider Section */}
      <div className="relative mt-12 z-10">

        {/* Desktop Slider Container */}
        <div 
          className="hidden md:flex md:justify-center overflow-x-auto gap-4 px-8 py-4 scroll-smooth scrollbar-hide snap-x snap-mandatory"
          ref={sliderRef}
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {products.map((product, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-80 bg-black backdrop-blur-sm hover:shadow-xl transition-all duration-300 snap-start flex flex-col"
            >
              <img 
                src={product.img} 
                alt={product.name} 
                className="w-full h-80 object-contain mb-4"
              />
              <div className="space-y-3 p-4 flex-1 flex flex-col justify-between">
                <h3 className="text-sm font-semibold text-white line-clamp-2 leading-tight h-10 flex items-start">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center mt-auto">
                  <p className="text-lg font-bold text-sky-300">
                    {product.price}
                  </p>
                  <a href={product.link} className="inline-block" target="_blank" rel="noopener noreferrer">
                    <img src="images/cart-button.png" alt="Cart" className="w-12 h-12 hover:scale-110 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Single Column Layout */}
        <div className="block md:hidden px-4 space-y-6">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="w-full bg-black backdrop-blur-sm overflow-hidden shadow-lg flex flex-col"
            >
              <img 
                src={product.img} 
                alt={product.name} 
                className="w-full h-88 object-contain"
              />
              <div className="p-4 space-y-4 flex-1 flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-white leading-tight min-h-[3.5rem] flex items-start">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center mt-auto">
                  <p className="text-xl font-bold text-sky-300">
                    {product.price}
                  </p>
                  <a href={product.link} className="inline-block" target="_blank" rel="noopener noreferrer">
                    <img src="images/cart-button.png" alt="Cart" className="w-12 h-12 hover:scale-110 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="relative z-10 flex justify-center mt-12 mb-15">
        <button className="bg-transparent border-2 border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white px-8 py-3 rounded-xs font-semibold text-lg transition-all duration-300 transform hover:scale-105">
          <a href="https://shop.line.me/@myworld">ดูสินค้าทันที</a>
        </button>
      </div>
      <div className="flex justify-center mt-4 relative z-10">
        <div className="border-b-2 border-gray-300 w-full max-w-80 mx-auto"></div>
      </div>
      {/* Footer */}
      <div className="relative z-10 text-center mt-8">
        <h1 className="text-sky-400 text-lg md:text-xl">2024 MY WORLD #ALWAYS CONNECTED</h1>
      </div>
    </section>
  );
};

export default ProductSlider;
