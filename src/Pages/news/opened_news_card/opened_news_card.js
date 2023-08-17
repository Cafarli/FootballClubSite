import React from "react";
import "./opened_news_card.css";
import { OtherPosts } from "../other_posts/other_posts";
import {
  FaCalendarAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Row } from "react-bootstrap";
import newsData from "../../../Data/news.json";
import { useParams } from "react-router";

export function OpenedNewsCard() {
  const { title } = useParams();
  const news = newsData.news.filter(news=> news.title = title)[0];

  return (
    <div className="OpenedNewsCard">
      <Row>
          <div className="opened-card-image">
            <img src={news.image} alt="content"></img>
          </div>
          <div className="opened-card-content">
            <p className="opened-card-date">
              <FaCalendarAlt style={{fontSize:'15px', marginRight: "1%" }} />
              {news.date}
            </p>
            <p className="opened-card-title">
            {news.title}
            </p>
            <p className="opened-card-info">
            {news.content}
            </p>
          </div>

          <div className="share">
            <ul>
              <li className="share-li" style={{ color: "#ffc800" }}>
                Share
              </li>
              <li className="share-li smedias">
                <FaFacebookF />
              </li>
              <li className="share-li smedias">
                <FaInstagram />
              </li>
              <li className="share-li smedias">
                <FaTwitter />
              </li>
            </ul>
          </div>
      </Row>

      <Row>
        <div className="other-posts">
          <h1>
            Other <span>News</span>
          </h1>
          <div className="other-posts-cards">
          {
            newsData.news.filter(n=> n.id>news.id && n.id<(news.id+4)).map((item,ind)=>{
              return (
                <OtherPosts props={item} />
              );
            })
          }</div>
          
        </div>
      </Row>
    </div>
  );
}
