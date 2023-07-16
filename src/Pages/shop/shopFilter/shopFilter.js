import React, { useState } from "react";
import "./shopFilter.css";

export default function ShopFilter() {
  const [show, setShow] = useState({
    type: false,
    gender: false,
    size: false,
    color: false,
    sort: false,
  });
  return (
    <div className="ShopFilter">
      <div className="sf-allCategories">
        <p
          className="sfac-cat"
          style={{ color: show.type ? "black" : "white" }}
          onClick={(e) => setShow({ type: !show.type })}
        >
          Product Type
        </p>
        <p
          className="sfac-cat"
          style={{ color: show.gender ? "black" : "white" }}
          onClick={(e) => setShow({ gender: !show.gender })}
        >
          Gender
        </p>
        <p
          className="sfac-cat"
          style={{ color: show.size ? "black" : "white" }}
          onClick={(e) => setShow({ size: !show.size })}
        >
          Size
        </p>
        <p
          className="sfac-cat"
          style={{ color: show.color ? "black" : "white" }}
          onClick={(e) => setShow({ color: !show.color })}
        >
          Color
        </p>
        <p
          className="sfac-cat"
          style={{ color: show.sort ? "black" : "white" }}
          onClick={(e) => setShow({ sort: !show.sort })}
        >
          Sort
        </p>
      </div>
      {show.type && (
        <div className="sf-category types">
          <div className="sfc-choice">
            <input name="tshirt" type="checkbox" />
            <label htmlFor="tshirt">T-shirts</label>
          </div>
          <div className="sfc-choice">
            <input name="short" type="checkbox" />
            <label htmlFor="short">Shorts</label>
          </div>
          <div className="sfc-choice">
            <input name="shirt" type="checkbox" />
            <label htmlFor="shirt">Shirt</label>
          </div>
        </div>
      )}
      {show.gender && (
        <div className="sf-category gender">
          <div className="sfc-choice">
            <input name="tshirt" type="checkbox" />
            <label htmlFor="tshirt">Men</label>
          </div>
          <div className="sfc-choice">
            <input name="short" type="checkbox" />
            <label htmlFor="short">Women</label>
          </div>
          <div className="sfc-choice">
            <input name="shirt" type="checkbox" />
            <label htmlFor="shirt">Kids</label>
          </div>
        </div>
      )}
      {show.size && (
        <div className="sf-category size">
          <div className="sfc-choice">
            <input name="tshirt" type="checkbox" />
            <label htmlFor="tshirt">XS</label>
          </div>
          <div className="sfc-choice">
            <input name="short" type="checkbox" />
            <label htmlFor="short">S</label>
          </div>
          <div className="sfc-choice">
            <input name="shirt" type="checkbox" />
            <label htmlFor="shirt">M</label>
          </div>
          <div className="sfc-choice">
            <input name="shirt" type="checkbox" />
            <label htmlFor="shirt">L</label>
          </div>
          <div className="sfc-choice">
            <input name="shirt" type="checkbox" />
            <label htmlFor="shirt">XL</label>
          </div>
        </div>
      )}
      {show.color && (
        <div className="sf-category color">
          <div className="sfc-choice">
            <input name="tshirt" type="checkbox" />
            <label htmlFor="tshirt">Blue</label>
          </div>
          <div className="sfc-choice">
            <input name="short" type="checkbox" />
            <label htmlFor="short">Yellow</label>
          </div>
          <div className="sfc-choice">
            <input name="shirt" type="checkbox" />
            <label htmlFor="shirt">Black</label>
          </div>
        </div>
      )}
      {show.sort && (
        <div className="sf-category sort">
          <div className="sfc-choice">
            <p>Best Seller</p>
          </div>
          <div className="sfc-choice">
            <p>Price Low To High</p>
          </div>
          <div className="sfc-choice">
            <p>Price High To Low</p>
          </div>
        </div>
      )}
    </div>
  );
}
