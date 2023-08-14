import React from "react";
import "./opened_news_card.css";
import { OtherPosts } from "../other_posts/other_posts";
import {
  FaCalendarAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import photo from "../images/photo.jpg";

export function OpenedNewsCard() {
  return (
    <div className="OpenedNewsCard">
      <Row>
          <div className="opened-card-image">
            <img src={photo} alt="content"></img>
          </div>
          <div className="opened-card-content">
            <p className="opened-card-date">
              <FaCalendarAlt style={{fontSize:'15px', marginRight: "1%" }} />
              August 11, 2023
            </p>
            <p className="opened-card-title">
              Sed mi magna, malesuada sit amet ipsum
            </p>
            <p className="opened-card-info">
              Vivamus hendrerit, tortor sed luctus maximus, nunc urna hendrerit
              nibh, sit amet efficitur libero lorem quis mauris. Nunc a pulvinar
              lectus. Pellentesque aliquam justo ut rhoncus lobortis. In sed
              venenatis massa. Sed sodales faucibus odio, eget tempus nibh
              accumsan ut. Fusce tincidunt semper finibus. Nullam consequat non
              leo interdum pulvinar. Suspendisse odio erat, suscipit vel aliquam
              tristique, dapibus at neque. Aliquam lectus tellus, feugiat non
              sodales nec, rhoncus a est. Etiam hendrerit, eros nec mollis
              blandit, velit sem aliquet ex, id tristique metus ligula tincidunt
              nisi. Ut porta augue at molestie feugiat. Donec quis neque
              molestie, interdum sapien at, dictum diam. Nam aliquam diam vitae
              purus vestibulum, sit amet rutrum tortor aliquet. Curabitur
              rhoncus consectetur tempor. Vivamus volutpat, mauris non auctor
              molestie, est ex auctor eros, vel egestas eros tellus non dui.
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
        <div className="other-post-cards">
          <h1>
            Other <span>News</span>
          </h1>
          <OtherPosts />
          <OtherPosts />
          <OtherPosts />
          <OtherPosts />
        </div>
      </Row>
    </div>
  );
}
