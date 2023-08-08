import React from "react";
import "./players.css";
import players from "../../../Data/players.json";
import { PlayerCard } from "../playerCard/playerCard";

export function Players() {
  

  return (
    <div className="Players">
      <h1>TEAM</h1>
      <div className="player-head">
        <h3 className="team-heading">PLAYERS</h3>
        <div className="players-list">

        
        {players.players.map((player, index) => {
          return <PlayerCard show={true} props={player} key={index} />;
        })}</div>
      </div>

      <div className="coache-head">
        <h3 className="team-heading">COACHES</h3>
        
        <div className="coache-list">{players.players
          .filter((pl, ind) => ind < 4)
          .map((player, index) => {
            return <PlayerCard show={false} props={player} key={index} />;
          })}</div>
      </div>
    </div>
  );
}
