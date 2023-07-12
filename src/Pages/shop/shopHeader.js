import React from "react";
import "./shopHeader.css";
import { ShopCategories } from "./shopCategories/shopCategories";

export function ShopHeader() {

  return (
    <div className="shopHeader">
      <div className="shopHeaderBgImg"></div>
      <ShopCategories />
    </div>
  );
}
