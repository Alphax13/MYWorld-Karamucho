import { useRef } from "react";
import "./style.css";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";

const ProductSlider = () => {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const products = [
    { img: "Product/1.png", name: "MY Snack Cup (MY World x คารามูโจ้ Collection)", price: "129 THB" },
    { img: "Product/2.png", name: "MY Frosty Tumbler (MY World x คารามูโจ้ Collection) (Pre-Order)", price: "109 THB" },
    { img: "Product/3.png", name: "MY Karamucho Bag (MY World x คารามูโจ้ Collection) ", price: "109 THB" },
  ];

  return (
    <section className="product ">
      <div className="rules2 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center px-4 lg:px-8 py-8 gap-4">
        <div className="product-img">
          <a href="https://www.myworld-store.com/" target="_blank" rel="myworld">
            <img src="images/presenter.png" alt="Presenter" />
          </a>
        </div>
        <div className="intro-text ">
          <img src="images/Collection.png" alt="Collection" className="collection-img" />
          <h2 className="text-left text-base sm:text-xl md:text-xl lg:text-xl">
            ลิมิเต็ดอิดิชั่นที่สร้างมาเพื่อแฟนตัวจริงของความมันส์! การรวมพลังครั้งนี้ไม่ใช่แค่ของสะสม แต่คือสัญลักษณ์ของการคอนเนคทุกไอเดีย สนุก เผ็ด มันส์ ในแบบที่เป็นคุณ รีบจับจองก่อนจะกลายเป็น Rare Item!
          </h2>
          <div className="w-full border-b-2 border-gray-300 mt-10"></div>
        </div>
      </div>

      <div className="all-product">
        <IoArrowBackCircleOutline className="slide-btn left hidden" onClick={slideLeft} />
        
        <div className="slider-track2" ref={sliderRef}>
            {products.map((product, index) => (
                <div className="card" key={index}>
                <img src={product.img} alt={product.name} />
                <div className="card-content">
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                </div>
                <div className="card-bottom">
                    <div className="cart-icon">
                      <a href="https://shop.line.me/@myworld">
                        < img src="images/cart-button.png" alt="Cart" />
                      </a>
                    </div>
                </div>
                </div>
            ))}
            </div>
        <IoArrowForwardCircleOutline className="slide-btn right hidden" onClick={slideRight} />
      </div>

      <div className="pd-btn">
        <button className="btn2">
          <a href="https://shop.line.me/@myworld">ดูสินค้าทันที</a>
        </button>
      </div>

      <div className="footer">
        <h1 className="text-[#24B6E0]">2024 MY WORLD #ALWAYS CONNECTED</h1>
      </div>
    </section>
  );
};

export default ProductSlider;
