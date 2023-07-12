import React from "react";
import "./about.css";
import { Awards } from "./awards";
import headingImage from "../images/about-background.jpg";
import aboutImage from "../images/aboutimage.png";

export function About() {
  return (
    <div className="About">
      <div className="about-heading">
        <div
          style={{ width: "100%", height: "3%" }}
          className="about-backgrouond"
        >
          <img
            style={{ width: "100%", height: "3%" }}
            className="background"
            src={headingImage}
            alt="about-background"
          ></img>
        </div>
      </div>
      <div className="about-content section">
        <div className="about-team">
            <p><img
                className="about-img"
              style={{ width: "100%" }}
              src={aboutImage}
              alt="about-team"
            /><h1 className="about-h1">
              ABOUT <span>TEAM</span>
            </h1>
                
              Pellentesque a urna sit amet turpis tristique facilisis.
              Pellentesque commodo turpis leo, id pulvinar turpis rhoncus
              interdum.
              <br />
              <br />
              &ensp;Nunc ullamcorper varius magna eu tincidunt. Vestibulum eget
              nisi mattis, feugiat nisl ac, tempor lacus. Proin a velit rhoncus,
              imperdiet orci quis, tempus orci. Duis tincidunt dui nec orci
              imperdiet, at scelerisque augue iaculis. Fusce non arcu tortor.
              Vivamus sapien metus, porta ut ipsum sit amet, accumsan volutpat
              libero.
              <br />
              <br />
              &ensp;Aenean pretium iaculis diam et semper. Sed nec risus ac nibh
              rhoncus scelerisque. Fusce id mauris massa. Aliquam erat volutpat.
              Maecenas porta dignissim erat, at vulputate tortor luctus eu.
            </p>
        </div>
      </div>

      <Awards />
    </div>
  );
}