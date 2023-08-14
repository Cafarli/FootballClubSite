import React from "react";
import "./shopHeader.css";
import { ShopCategories } from "./shopCategories/shopCategories";
import ShopFilter from "./shopFilter/shopFilter";
import a from "../../Images/backgroundImages/teamKits.png"
export function ShopHeader() {

  return (
    <div className="shopHeader">
      <div className="shopHeaderBgImg">
        <img src={a} alt="background"/>
      </div>
      <ShopCategories />
      <ShopFilter />
    </div>
  );
}
