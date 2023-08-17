import React, { useEffect, useState } from "react";
import "./openShopCard.css";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import data from "../../../Data/shopClothing.json";
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
  const { kId } = useParams();
  const kit = data["kits"].filter((kit) => kit.id === kId)[0];

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
      <Row className="opc-page">
        <Col id="photos" md={7} style={{ paddingLeft: "2%" }}>
          <section className="sect one">
            <Swiper
              direction={windowSize[0] > 700 ? "vertical" : "horizontal"}
              loop={true}
              grabCursor={true}
              autoplay={{ delay: 3000 }}
              slidesPerView={2}
              breakpoints={{
                450: { width: 450, slidesPerView: 2 },
                700: { width: 700, slidesPerView: 2 },
              }}
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
              {kit.photo.map((i, ind) => {
                return (
                  <SwiperSlide key={ind}>
                    <div className="productPhotos">
                      <img
                        onClick={(e) => handleImg(e)}
                        src={i}
                        alt="product"
                      ></img>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </section>
          <section className="sect two">
            <div className="productPhoto">
              <img
                className="selectedPhoto"
                src={kit.photo[0]}
                alt="product"
              ></img>
            </div>
          </section>
        </Col>
        <Col sm={12} md={5}>
          <div className="product-info">
            <div className="product-title">
              <p className="product-name">{kit.title}</p>
              <p className="product-price">{kit.price}$</p>
            </div>
            <div className="product-size">
              <p>SELECT SIZE</p>
              <div className="sizes">
                {kit.sizes.map((size, ind) => {
                  return (
                    <div
                      className="selectable"
                      onClick={(e) => handleSizes(e)}
                    >
                      {size}
                    </div>
                  );
                })}
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
              <button className="addToCart">ADD TO CART</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
