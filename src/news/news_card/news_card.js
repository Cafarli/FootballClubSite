import React from "react";
import "../news_card/news_card.css";
import { AiOutlineRight }  from 'react-icons/ai';
import photo from '../images/photo.jpg';
import { Link } from "react-router-dom";

export function NewsCard(props) {
    return(
        <div className="NewsCard" style={{width: props.width}}>
            <div className="card-image">
                <img src={photo} alt='content'></img>
            </div>
            <div className="card-content">
                <p className="card-date">November 25, 2015</p>
                <Link to={`news/newsCardTitle/`}><p className="card-title" title="Sed mi magna, malesuada sit amet ipsum">Sed mi magna, malesuada sit amet ipsum</p></Link>
                <p className="card-info">Vivamus hendrerit, tortor sed luctus maximus, nunc urna hendrerit nibh, sit amet efficitur libero, nunc urna hendrerit nibh, sit amet efficitur libero</p>
            </div>
            <div className="card-more">
            <Link style={{display:"flex", width:"100%"}} to={`news/newsCardTitle/`}>
                <div className="card-read-more-text">READ MORE</div>
                <div className="card-read-more-arrow"> <AiOutlineRight /></div>
                </Link>
            </div>

        </div>
);
}