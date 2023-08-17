import React from "react";
import "../other_posts/other_posts.css";
import { Link } from "react-router-dom";

export function OtherPosts(props) {
  return (
    <div className="OtherPosts col-xs-6 col-sm-6 col-md-4 col-lg-3">
      <div className="posts">
        <div className="other-posts-image">
          <Link className="other-posts-title" to={`${props.props.title}`}>
            <img src={props.props.image} alt="content"></img>
          </Link>
        </div>
        <div className="other-posts-content">
          <p className="other-posts-date">{props.props.date}</p>
          <Link className="other-posts-title" to={`newsCardTitle/`}>
            <p title="SUSPENDISSE PURUS ENIM, DICTUM SED LOREM AC, SODALES MAXIMUS EST">
              {props.props.title}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
