import { useRef } from "react";
import "./style.css";

const ProductSlider = () => {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 200;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 200;
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
    { img: "Product/11.png", name: "Collab", price: "390 THB" },
    { img: "Product/12.png", name: "MY FABULOUS TOWEL", price: "490 THB" },
    { img: "Product/13.png", name: "MY COOLER COOLER", price: "490 THB" },
    { img: "Product/14.png", name: "MY KIND OF SOUP_T-SHIRT", price: "790 THB" },
  ];

  return (
    <section className="product" id="Items">
      <div className="rules2">
        <div className="product-img w-[70%]">
          <a href="https://www.myworld-store.com/" target="_blank" rel="noopener noreferrer">
            <img src="images/presenter.png" alt="Presenter" />
          </a>
        </div>
        <div className="intro-text">
          <div className="main-text">
            <img src="images/Collection.png" alt="Collection" />
            <h2>
              วัยรุ่น MY เป็นได้ง่ายๆ แค่ช้อปสินค้า My World Collection สุดคูล
              <br /> มีสไตล์แบบไม่เหมือนใคร ไอเทมใหม่ที่สายสร้างสรรค์
              <br /> และนักสะสมไม่ควรพลาด
            </h2>
          </div>
        </div>
      </div>
      <div className="all-product">
        <button className="slide-btn left" onClick={slideLeft}>
          &#8592;
        </button>
        <div className="slider-track2 h-full flex items-center w-[90%]" ref={sliderRef}>
          {products.map((product, index) => (
            <div className="card h-full flex flex-col justify-between" key={index}>
              <img src={product.img} alt={product.name} className="h-3/4 object-cover" />
              <div className="card-bottom h-1/4 flex justify-between items-center">
                <div className="col-l">
                  <div className="card-content">
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                  </div>
                </div>
                <div className="col-r">
                  <img src="images/cart-button.png" alt="Cart" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="slide-btn right" onClick={slideRight}>
          &#8594;
        </button>
      </div>
      <div className="pd-btn">
        <button className="btn2">
          <a href="https://shop.line.me/@myworld">ดูสินค้าทันที</a>
        </button>
      </div>
      <div className="footer">
        <h1 style={{ fontSize: "16px" }}>2024 MY WORLD #ALWAYS CONNECTED</h1>
      </div>
    </section>
  );
};

export default ProductSlider;