import React, { useState } from "react";
import { MdLocationOn, MdOutlineKeyboardArrowDown } from "react-icons/md";
import logo from "../../../Images/logo.png";

export default function MatchLine(props) {

  const [show, setShow] = useState(false);

  return (
    <tr className="match" key={props.index}>
      <tr className="mTitle">
        <td className="date">
          <span className="day"> {props.match.date.split(" ")[0]}</span>{" "}
          {props.match.date.split(" ")[1]}
        </td>
        <td className="score">
          <img src={logo} alt="logo" />
          {props.match.homeTeam}{" "}
          <span>
            {props.match.homeGoals} - {props.match.awayGoals}
          </span>{" "}
          {props.match.awayTeam}
          <img src={logo} alt="logo" />
        </td>
        <td className="location">
          <MdLocationOn className="icon" />
          &nbsp;{props.match.location}
        </td>
        <td className="moreArrow" onClick={() => setShow(!show)}>
            <MdOutlineKeyboardArrowDown />
        
        </td>
      </tr>
      {show && (
        <tr className="mMore">
          <p className="mg-title">
          <img src={logo} alt="logo" />

            {props.match.homeTeam}{" "}
            <span>
              {props.match.homeGoals} - {props.match.awayGoals}
            </span>{" "}
            {props.match.awayTeam}
          <img src={logo} alt="logo" />

          </p>
          <div className="goals">
            <div className="homeGoals">
              {props.match.homeGoalPlayers &&
                !!props.match.homeGoalPlayers.length &&
                props.match.homeGoalPlayers.map((goal, ind) => {
                  return (
                    <p>
                      {goal.split(" ")[0]} &nbsp; {goal.split(" ").splice(1)} '
                    </p>
                  );
                })}
            </div>
            <div className="awayGoals">
              {props.match.awayGoalPlayers &&
                !!props.match.awayGoalPlayers.length &&
                props.match.awayGoalPlayers.map((goal, ind) => {
                  return (
                    <p>
                      {goal.split(" ")[0]}&nbsp; {goal.split(" ").splice(1)} '
                    </p>
                  );
                })}
            </div>
          </div>
        </tr>
      )}
    </tr>
  );
}
