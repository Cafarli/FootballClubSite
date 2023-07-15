import React from "react";
import { Link } from "react-router-dom";
import "./shopCard.css";

export function ShopCard(props) {
  console.log(props.props.photo[0], "\n2", props.props.photo[1]);
  return (
    <div className="ShopCard">
      {/* to={`/shop/kit`} */}
      <Link >
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
        <div className="value-info">
          <p className="price">${props.props.price}</p>
          <p className="buy">BUY</p>
        </div>
      </Link>
    </div>
  );
}
