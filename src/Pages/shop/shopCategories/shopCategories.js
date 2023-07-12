import React from "react";
import "./shopCategories.css";

export function ShopCategories() {
  const handleSelectedCtgr = (e) => {
    const categories = document.querySelector(".sc-allCtg");
    if (!e.target.classList.contains("selectedCtgr")) {
      for (let i = 0; i < categories.childNodes.length; i++) {
        categories.childNodes[i].classList.remove('selectedCtgr');
      }
      e.target.classList.add('selectedCtgr');
    }
  };

  return (
    <div className="shop-categories">
      <ul className="sc-allCtg">
        <li onClick={(e) => handleSelectedCtgr(e)} className="selectedCtgr">KITS</li>
        <li onClick={(e) => handleSelectedCtgr(e)}>BY PLAYER</li>
        <li onClick={(e) => handleSelectedCtgr(e)}>FASHION</li>
        <li onClick={(e) => handleSelectedCtgr(e)}>TRAINING</li>
        <li onClick={(e) => handleSelectedCtgr(e)}>ACCESSORIES</li>
      </ul>
    </div>
  );
}
