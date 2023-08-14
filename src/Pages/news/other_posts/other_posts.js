import React from "react";
import "../other_posts/other_posts.css";
import photo from "../images/photo.jpg";
import { Link } from "react-router-dom";

export function OtherPosts() {
  return (
    <div className="OtherPosts">
      <div className="posts">
        <div className="other-posts-image">
          <Link className="other-posts-title" to={`newsCardTitle/`}>
            <img src={photo} alt="content"></img>
          </Link>
        </div>
        <div className="other-posts-content">
          <p className="other-posts-date">August 11, 2023</p>
          <Link className="other-posts-title" to={`newsCardTitle/`}>
            <p title="SUSPENDISSE PURUS ENIM, DICTUM SED LOREM AC, SODALES MAXIMUS EST">
              SUSPENDISSE PURUS ENIM, DICTUM SED LOREM AC, SODALES MAXIMUS EST
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
