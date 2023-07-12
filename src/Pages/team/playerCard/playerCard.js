import React from "react";
import "./playerCard.css";
import { Link } from "react-router-dom";

export function PlayerCard(props) {
  return (
    <div className="ply">
      <div className="player-view">
        <div className="ply-num-photo">
          <div className="ply-num">{props.props.number}</div>
          <div className="ply-img">
            <img src={props.props.photo} alt="player" />
          </div>
          <Link to={`player/`}>
            <div className="bio">INFO</div>
          </Link>
        </div>
        <div className="ply-info">
          <div className="ply-name-pos">
            <Link to={`player/`}>
              <p className="ply-name">
                {props.props.firstname} <span>{props.props.surname}</span>
              </p>
            </Link>
            <p className="position defender">{props.props.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
