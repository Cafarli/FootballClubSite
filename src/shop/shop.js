import React from "react";
import "./shop.css";
import { ShopCard } from "./shopCard/shopCard";
import { ShopCategories } from "./shopCategories/shopCategories";
import info from "../shopClothing.json";

export function Shop() {
  const data = info;

  return (
    <div className="Shop">
      <div className="shopBgImg"></div>
      <ShopCategories />
      <div className="shopcards">
        {data.kits &&
          data.kits.length > 0 && 
          data.kits.map((item) => {
            return <ShopCard props={item} key={item.id} width="22%"/>;
          })}
        {data.tshirts &&
          data.tshirts.length > 0 &&
          data.tshirts.map((item) => {
            return <ShopCard props={item} key={item.id} width="22%"/>;
          })}
        {data.bottoms &&
          data.bottoms.length > 0 &&
          data.bottoms.map((item) => {
            return <ShopCard props={item} key={item.id} width="22%"/>;
          })}
        {data.jackets &&
          data.jackets.length > 0 &&
          data.jackets.map((item) => {
            return <ShopCard props={item} key={item.id} width="22%"/>;
          })}
      </div>
    </div>
  );
}
