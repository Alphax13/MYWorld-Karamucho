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
    { img: "Product/01.png", name: "MY Cleanest Hands", price: "39 THB" },
    { img: "Product/02.png", name: "MY Frosty Tumbler", price: "390 THB" },
    { img: "Product/03.png", name: "MY MONOGRAM T-SHIRT", price: "390 THB" },
    { img: "Product/04.png", name: "MY BONNIE HOODIE", price: "1,290 THB" },
    { img: "Product/05.png", name: "MY BONNIE HOODIE light blue", price: "1,290 THB" },
    { img: "Product/06.png", name: "MY CASETY I-PHONE 15 PRO #01", price: "790 THB" },
    { img: "Product/07.png", name: "MY CASETY I-PHONE 15 PRO #02", price: "790 THB" },
    { img: "Product/08.png", name: "MY CASETY I-PAD (Pro 11) INCH #01", price: "1,290 THB" },
    { img: "Product/09.png", name: "MY CASETY I-PAD (Pro 11) INCH #02", price: "1,290 THB" },
    { img: "Product/10.png", name: "Collab (XL) แก้วเก็บความเย็น", price: "490 THB" },
  ];

  return (
    <section className="product">
      <div className="rules2">
        <div className="product-img">
          <a href="https://www.myworld-store.com/" target="_blank" rel="myworld">
            <img src="/images/resenter.png" alt="Presenter" />
          </a>
        </div>
        <div className="intro-text">
          <img src="/images/ollection.png" alt="Collection" className="collection-img" />
          <h2 className="text-left text-base sm:text-xl md:text-xl lg:text-xl">
            วัยรุ่น MY เป็นได้ง่ายๆ แค่ช้อปสินค้า My World Collection สุดคูล<br />
            มีสไตล์แบบไม่เหมือนใคร ไอเทมใหม่ที่สายสร้างสรรค์<br />
            และนักสะสมไม่ควรพลาด
          </h2>
          <div className="w-full border-b-2 border-gray-300 mt-10"></div>
        </div>
      </div>

      <div className="all-product">
        <IoArrowBackCircleOutline className="slide-btn left" onClick={slideLeft} />
        
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
                    <img src="/images/art-button.png" alt="Cart" />
                    </div>
                </div>
                </div>
            ))}
            </div>
        <IoArrowForwardCircleOutline className="slide-btn right" onClick={slideRight} />
      </div>

      <div className="pd-btn">
        <button className="btn2">
          <a href="https://shop.line.me/@myworld">ดูสินค้าทันที</a>
        </button>
      </div>

      <div className="footer">
        <h1>2024 MY WORLD #ALWAYS CONNECTED</h1>
      </div>
    </section>
  );
};

export default ProductSlider;
