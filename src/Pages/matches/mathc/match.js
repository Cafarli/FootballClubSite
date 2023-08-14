import React from "react";
import "./match.css";
import { Table } from "react-bootstrap";
import data from "../../../Data/matches.json";
import MatchLine from "./matchLine";
import logo from "../../../Images/logo.png";
import bg from "../../../Images/backgroundImages/matchFans.jpg";

export function Match() {
  return (
    <div className="Match">
      <div className="mNextMatch" style={{ backgroundImage: `url('${bg}')` }}>
        <h1>MATCHES</h1>
        <div className="mnm-matchDetails">
          <div className="mnm-teams">
            <img src={logo} alt="logo" />
            <p>
              Jabrayil FC <span>&#8213;</span> Jabrayil FC
            </p>
            <img src={logo} alt="logo" />
          </div>
          <p className="mnm-date">
            20 : 00 <br />9 August
          </p>
          <p className="mnm-league">Premier League</p>
          <p className="mnm-location">Stadium, Baku</p>
        </div>
      </div>
      <div className="mFilter">
        <select className="mf-leagues">
          <option>Premier league</option>
          <option>Champions league</option>
        </select>
        <select className="mf-month">
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
        </select>
      </div>
      <Table className="games">
        {data.mathches &&
          !!data.mathches.length &&
          data.mathches.map((match, index) => {
            return <MatchLine key={index} match={match} />;
          })}
      </Table>
    </div>
  );
}
