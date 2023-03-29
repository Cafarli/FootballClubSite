import React, { useState } from "react";
import "./openShopCard.css";
import { ShopCategories } from "../shopCategories/shopCategories";
import { Container, Row, Col } from "react-bootstrap";
import data from "../../shopClothing.json";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Mousewheel,
} from "swiper";

export function OpenedShopCard() {
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter <= 0) {
    decrementCounter = () => setCounter(1);
  }

  return (
    <Container className="openShopcard">
      <div className="shopBgImg"></div>
      <ShopCategories />
      <Row>
        <Col id="photos" md={7} style={{ paddingLeft: "2%" }}>
          <section className="section one">
            <Swiper
              direction={"vertical"}
              loop={true}
              grabCursor={true}
              autoplay={{ delay: 3000 }}
              slidesPerView={2}
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
                        <img src={i.photo} alt="product"></img>
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
            {/* <div className="productMiniPhotos">
            {data.kits
              .filter((item, index) => index < 5)
              .map((i, ind) => {
                return (
                  <div className="productPhotos" key={ind}>
                    <img src={i.photo} alt="product"></img>
                  </div>
                );
              })}
              </div> */}
          </section>
          <section className="section two">
            {data.kits
              .filter((item, index) => index < 1)
              .map((i, ind) => {
                return (
                  <div className="productPhoto" key={ind}>
                    <img src={i.photo} alt="product"></img>
                  </div>
                );
              })}
          </section>
        </Col>
        <Col md={5}>
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
                <div tabIndex={0} className="selectable">
                  XS
                </div>
                <div tabIndex={0} className="selectable">
                  S
                </div>
                <div tabIndex={0} className="selectable">
                  M
                </div>
                <div tabIndex={0} className="selectable">
                  L
                </div>
                <div tabIndex={0} className="selectable">
                  XL
                </div>
                <div tabIndex={0} className="selectable">
                  2XL
                </div>
                <div tabIndex={0} className="selectable">
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
