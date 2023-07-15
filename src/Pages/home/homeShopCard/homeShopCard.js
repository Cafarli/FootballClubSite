import React from "react";
import { Link } from "react-router-dom";
import './homeShopCard.css'

export function HomeShopCard(props){
    return(
    
        <div className="HomeShopCard">
            <Link to={`/shop/kit`}>
            <div className="hsc-image">
                <img src={props.props.photo} alt="clothes"></img>
            </div>
            <div className="hsc-title">
                <p title={props.props.title} >{props.props.title}</p>
            </div>
            </Link>
        </div>
    );
}