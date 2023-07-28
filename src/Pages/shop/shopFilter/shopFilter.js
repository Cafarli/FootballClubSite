import React, { useState } from "react";
import "./shopFilter.css";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

export default function ShopFilter() {
  const [show, setShow] = useState({
    type: false,
    gender: false,
    size: false,
    color: false,
  });
  const [btns, setBtns] = useState({filter: false, sort: false});
  const closeShow =() => {
    setShow({show: false})
  }
  return (
    <div className="ShopFilter">
      <div className="sf-allCategories">
        {/* Burger version */}
        <div className="sfal-sortBtn" onClick={() => setBtns({sort: !btns.sort})}>
          <p className="sfac-cat" style={{ color: btns.sort ? "black" : "white" }}>
            Sort
          </p>
        </div>

        {/* Expanded version */}
        <div className="sfac-Part firstC">
          <p
            className="sfac-cat"
            style={{ color: show.type ? "black" : "white" }}
            onClick={(e) => setShow({ type: !show.type })}
          >
            Product Type{" "}
            {show.type ? (
              <MdOutlineKeyboardArrowUp />
            ) : (
              <MdOutlineKeyboardArrowDown />
            )}
          </p>
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
          <p
            className="sfac-cat"
            style={{ color: show.gender ? "black" : "white" }}
            onClick={(e) => setShow({ gender: !show.gender })}
          >
            Gender{" "}
            {show.gender ? (
              <MdOutlineKeyboardArrowUp />
            ) : (
              <MdOutlineKeyboardArrowDown />
            )}
          </p>
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
          <p
            className="sfac-cat"
            style={{
              color: show.size ? "black" : "white",
              backgroundColor: show.size ? "black" : "white",
            }}
            onClick={(e) => setShow({ size: !show.size })}
          >
            Size{" "}
            {show.size ? (
              <MdOutlineKeyboardArrowUp />
            ) : (
              <MdOutlineKeyboardArrowDown />
            )}
          </p>
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
          <p
            className="sfac-cat"
            style={{ color: show.color ? "black" : "white" }}
            onClick={(e) => setShow({ color: !show.color })}
          >
            Color{" "}
            {show.color ? (
              <MdOutlineKeyboardArrowUp />
            ) : (
              <MdOutlineKeyboardArrowDown />
            )}
          </p>
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
        </div>
        {/* burger version */}
        <div className="sfac-Part secondC">
          <p
            className="sfac-cat"
            style={{ color: show.filter ? "black" : "white" }}
            onClick={(e) => {setBtns({filter: !btns.filter}); closeShow()}}
          >
            Filter
          </p>
        </div>
      </div>
          {btns.filter && (
            <div className="sf-category filter">
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
      {btns.sort && (
        <div className="sfac-sortPart">
          <p
            className="sfacsp-cat"
            style={{ color: show.type ? "black" : "white" }}
            onClick={() => {setShow({ type: !show.type }); setBtns({...btns, filter: false})}}
          >
            Product Type {show.type? <MdOutlineKeyboardArrowUp/>: <MdOutlineKeyboardArrowDown/>}
          </p>
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

          <p
            className="sfacsp-cat"
            style={{ color: show.gender ? "black" : "white" }}
            onClick={(e) => {setShow({ gender: !show.gender }); setBtns({...btns, filter: false})}}
          >
            Gender {show.gender? <MdOutlineKeyboardArrowUp/>: <MdOutlineKeyboardArrowDown/>}
          </p>
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
          <p
            className="sfacsp-cat"
            style={{ color: show.size ? "black" : "white" }}
            onClick={(e) => {setShow({ size: !show.size }); setBtns({...btns, filter: false})}}
          >
            Size {show.size? <MdOutlineKeyboardArrowUp/>: <MdOutlineKeyboardArrowDown/>}
          </p>
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
          <p
            className="sfacsp-cat"
            style={{ color: show.color ? "black" : "white" }}
            onClick={(e) => {setShow({ color: !show.color }); setBtns({...btns, filter: false})}}
          >
            Color {show.color? <MdOutlineKeyboardArrowUp/>: <MdOutlineKeyboardArrowDown/>}
          </p>
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
        </div>
      )}
    </div>
  );
}
