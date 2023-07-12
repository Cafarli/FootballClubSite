import React from "react";
import "./players.css";
import { con } from  "../../../ConnectDatabase/connect";
import gk1 from "../players/images/Şahruddin_Məhəmmədəliyev1-203x265.png";
import gk2 from "../players/images/Şahruddin_Məhəmmədəliyev1-203x265.png";
import gk3 from "../players/images/Şahruddin_Məhəmmədəliyev1-203x265.png";
import def1 from "../players/images/Qara_Qarayev1-203x265.png";
import def2 from "../players/images/Qara_Qarayev1-203x265.png";
import def3 from "../players/images/Qara_Qarayev1-203x265.png";
import mid1 from "../players/images/Bədavi_Hüseynov-203x265.png";
import mid2 from "../players/images/Bədavi_Hüseynov-203x265.png";
import mid3 from "../players/images/Bədavi_Hüseynov-203x265.png";
import atc1 from "../players/images/Ramil_Şeydayev1-203x265.png";
import atc2 from "../players/images/Ramil_Şeydayev1-203x265.png";
import atc3 from "../players/images/Ramil_Şeydayev1-203x265.png";
import { PlayerCard } from "../playerCard/playerCard";

export function Players() {
  console.log(con);
  const players = [
    {
      photo: gk1,
      number: 1,
      firstname: "Şahruddin",
      surname: "Məhəmmədəliyev",
      position: "Goalkeeper",
    },
    {
      photo: gk2,
      number: 13,
      firstname: "Şahruddin",
      surname: "Məhəmmədəliyev",
      position: "Goalkeeper",
    },
    {
      photo: gk3,
      number: 23,
      firstname: "Şahruddin",
      surname: "Məhəmmədəliyev",
      position: "Goalkeeper",
    },
    {
      photo: def1,
      number: 2,
      firstname: "Qara",
      surname: "Qarayev",
      position: "Defender",
    },
    {
      photo: def2,
      number: 4,
      firstname: "Qara",
      surname: "Qarayev",
      position: "Defender",
    },
    {
      photo: def3,
      number: 5,
      firstname: "Qara",
      surname: "Qarayev",
      position: "Defender",
    },
    {
      photo: mid1,
      number: 8,
      firstname: "Bədavi",
      surname: "Hüseynov",
      position: "Midfielder",
    },
    {
      photo: mid2,
      number: 7,
      firstname: "Bədavi",
      surname: "Hüseynov",
      position: "Midfielder",
    },
    {
      photo: mid3,
      number: 12,
      firstname: "Bədavi",
      surname: "Hüseynov",
      position: "Midfielder",
    },
    {
      photo: atc1,
      number: 9,
      firstname: "Ramil",
      surname: "Şeydayev",
      position: "Attacker",
    },
    {
      photo: atc2,
      number: 10,
      firstname: "Ramil",
      surname: "Şeydayev",
      position: "Attacker",
    },
    {
      photo: atc3,
      number: 11,
      firstname: "Ramil",
      surname: "Şeydayev",
      position: "Attacker",
    },
  ];

  return (
    <div className="Players">
      <h1>TEAM</h1>
      <div className="player-head">
        <h3 className="team-heading">PLAYERS</h3>
        <div className="players-list">

        
        {players.map((player, index) => {
          return <PlayerCard props={player} key={index} />;
        })}</div>
      </div>

      <div className="coache-head">
        <h3 className="team-heading">COACHES</h3>
        
        <div className="coache-list">{players
          .filter((pl, ind) => ind < 4)
          .map((player, index) => {
            return <PlayerCard props={player} key={index} />;
          })}</div>
      </div>
    </div>
  );
}