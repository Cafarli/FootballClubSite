import React from "react";
import "./shop.css";
import info from "../../Data/shopClothing.json";
import { ShopHeader } from "./shopHeader";
import { Col, Row } from "react-bootstrap";
import { ShopCard } from "./shopCard/shopCard";

export function Shop() {
  const data = info;

  return (
    <div className="Shop">
      <ShopHeader />
      <Row className="shopcards">
        {data.kits &&
          data.kits.length > 0 &&
          data.kits.filter((k,i)=>i>3).map((item) => {
            return (
              <Col xl={3} lg={3} md={4} sm={6} key={item.id}>
                <ShopCard props={item} />
              </Col>
            );
          })}
        {/* {data.tshirts &&
          data.tshirts.length > 0 &&
          data.tshirts.map((item) => {
            return (
              <Col xl={3} lg={3} md={4} sm={6} key={item.id}>
                <ShopCard props={item} />
              </Col>
            );
          })}
        {data.bottoms &&
          data.bottoms.length > 0 &&
          data.bottoms.map((item) => {
            return (
              <Col xl={3} lg={3} md={4} sm={6} key={item.id}>
                <ShopCard props={item} />
              </Col>
            );
          })}
        {data.jackets &&
          data.jackets.length > 0 &&
          data.jackets.map((item) => {
            return (
              <Col xl={3} lg={3} md={4} sm={6} key={item.id}>
                <ShopCard props={item} />
              </Col>
            );
          })} */}
      </Row>
    </div>
  );
}
