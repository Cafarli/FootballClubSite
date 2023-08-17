import React from "react";
import { Link } from "react-router-dom";
import "./shopCard.css";

export function ShopCard(props) {
  return (
    <div className="ShopCard">
      <Link to={`/shop/${props.props.id}`}>
        <div className="shop-card-img-container">
          <div className="shop-card-image">
            <div className="firstImg">
              <img src={props.props.photo[1]} alt="clothes" />
            </div>
            <div className="secondImg">
              <img src={props.props.photo[0]} alt="clothes" />
            </div>
          </div>
        </div>
        <div className="sc-info">
          <p>{props.props.title}</p>
          <p className="sc-price">${props.props.price}</p>
        </div>
      </Link>
    </div>
  );
}
