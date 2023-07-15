import React from "react";
import "./shopHeader.css";
import { ShopCategories } from "./shopCategories/shopCategories";
import ShopFilter from "./shopFilter/shopFilter";

export function ShopHeader() {

  return (
    <div className="shopHeader">
      <div className="shopHeaderBgImg"></div>
      <ShopCategories />
      <ShopFilter />
    </div>
  );
}
