import React from "react";
import "../news_card/news_card.css";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

export function NewsCard(props) {
  
  return (
    <div className="NewsCard" style={{ width: props.width }}>
      <div className="card-image">
        <img src={props.data.image} alt="content"></img>
      </div>
      <div className="card-content">
        <p className="card-date">{props.data.date}</p>
        <Link to={`${props.data.title}`}>
          <p className="card-title" title={props.data.title}>
            {props.data.title}
          </p>
        </Link>
        <p className="card-info">{props.data.content}</p>
      </div>
      <div className="card-more">
        <Link style={{ display: "flex", width: "100%" }} to={`${props.data.title}`}>
          <div className="card-read-more-text">READ MORE</div>
          <div className="card-read-more-arrow">
            {" "}
            <AiOutlineRight />
          </div>
        </Link>
      </div>
    </div>
  );
}
