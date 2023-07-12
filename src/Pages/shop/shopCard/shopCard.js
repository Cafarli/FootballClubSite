import React from "react";
import { Link } from "react-router-dom";
import './shopCard.css'

export function ShopCard(props){
    return(
    
        <div className="ShopCard" style={{width:props.width}}>
            <Link to={`/shop/kit`}>
            <div className="shop-card-image">
                <img src={props.props.photo} alt="clothes"></img>
            </div>
            <div className="value-info">
                <p className="price">${props.props.price}</p>
                <p className="buy">BUY</p>
            </div>
            </Link>
        </div>
    );
}