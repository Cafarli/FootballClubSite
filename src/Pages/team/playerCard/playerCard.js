import React from "react";
import "./playerCard.css";
import { Link } from "react-router-dom";
import photo from "../players/images/player.png";

export function PlayerCard(props) {

  return (
    <div className="ply col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <div className="player-view">
        <div className="ply-num-photo">
        <Link to={`${props.props.name}`}>
          <div className="ply-img">
            <img src={photo} alt="player" />
            {props.show && <div className="ply-num">{props.props.number}</div>}
          </div>
          </Link>
        </div>
        <div className="ply-info">
          <div className="ply-name-pos">
            <Link to={`${props.props.name}`}>
              <p className="ply-name">
                {props.props.name}
              </p>
            </Link>
            <p className="position">{props.props.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
