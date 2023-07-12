import React, { useEffect, useState } from "react";
import "./openShopCard.css";
import { Container, Row, Col } from "react-bootstrap";
import data from "../../data/shopClothing.json";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Mousewheel,
} from "swiper";
import { ShopHeader } from "../shopHeader";

export function OpenedShopCard() {
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter === 0) {
    setCounter(1);
  }

  // Change sizes
  const [size, setSize] = useState("XS");
  const handleSizes = (e) => {
    const sizes = document.querySelector(".sizes");
    if (!e.target.classList.contains("selected")) {
      for (let i = 0; i < sizes.childNodes.length; i++) {
        sizes.childNodes[i].classList.remove("selected");
      }
      e.target.classList.add("selected");
      setSize(e.target.innerText);
    }
  };

  // Change image
  const handleImg = (e) => {
    document.querySelector(".selectedPhoto").src = e.target.src;
  };

  // Get width of screen
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Container className="openShopcard">
      <ShopHeader />
      <Row>
        <Col id="photos" md={7} style={{ paddingLeft: "2%" }}>
          <section className="section one">
            <Swiper
              direction={windowSize[0] > 700 ? "vertical" : "horizontal"}
              loop={true}
              grabCursor={true}
              autoplay={{ delay: 3000 }}
              slidesPerView={2}
              breakpoints={{ 450: { width: 450, slidesPerView: 2 } ,
              700: { width: 700, slidesPerView: 2 }}}
              spaceBetween={20}
              mousewheel={true}
              modules={[
                Navigation,
                Pagination,
                Scrollbar,
                A11y,
                Autoplay,
                Mousewheel,
              ]}
              className="productMiniPhotos"
            >
              {data.kits
                .filter((item, index) => index < 6)
                .map((i, ind) => {
                  return (
                    <SwiperSlide key={ind}>
                      <div className="productPhotos">
                        <img
                          onClick={(e) => handleImg(e)}
                          src={i.photo}
                          alt="product"
                        ></img>
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </section>
          <section className="section two">
            {data.kits
              .filter((item, index) => index < 1)
              .map((i, ind) => {
                return (
                  <div className="productPhoto" key={ind}>
                    <img
                      className="selectedPhoto"
                      src={i.photo}
                      alt="product"
                    ></img>
                  </div>
                );
              })}
          </section>
        </Col>
        <Col sm={12} md={5}>
          <div className="product-info">
            <div className="product-title">
              <p className="product-name">
                Mens Home Long Sleeve Shirt 22/23 White
              </p>
              <p className="product-price">100.00$</p>
            </div>
            <div className="product-size">
              <p>SELECT SIZE</p>
              <div className="sizes">
                <div
                  className="selectable selected"
                  onClick={(e) => handleSizes(e)}
                >
                  XS
                </div>
                <div className="selectable" onClick={(e) => handleSizes(e)}>
                  S
                </div>
                <div className="selectable" onClick={(e) => handleSizes(e)}>
                  M
                </div>
                <div className="selectable" onClick={(e) => handleSizes(e)}>
                  L
                </div>
                <div className="selectable" onClick={(e) => handleSizes(e)}>
                  XL
                </div>
                <div className="selectable" onClick={(e) => handleSizes(e)}>
                  2XL
                </div>
                <div className="selectable" onClick={(e) => handleSizes(e)}>
                  3XL
                </div>
              </div>
            </div>
            <div className="quantity">
              <p>QUANTITY</p>
              <div className="quantity-num">
                <button className="minus" onClick={decrementCounter}>
                  -
                </button>
                <input className="value" name="value_input" value={counter} />
                <button className="plus" onClick={incrementCounter}>
                  +
                </button>
              </div>
            </div>
            <div className="add-cart">
              <button className="addToCart">ADD TO CARD</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
