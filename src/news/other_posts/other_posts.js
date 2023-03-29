import React from "react";
import "../other_posts/other_posts.css";
import photo from '../images/photo.jpg';

export function OtherPosts() {
    return(
        <div className="OtherPosts">
            <div className="posts">
                <div className="other-posts-image">
                    <img src={photo} alt='content'></img>
                </div>
                <div className="other-posts-content">
                    <p className="other-posts-date">November 25, 2015</p>
                    <p className="other-posts-title">SUSPENDISSE PURUS ENIM, DICTUM SED LOREM AC, SODALES MAXIMUS EST</p>
                </div>
            </div>
        </div>
);
}