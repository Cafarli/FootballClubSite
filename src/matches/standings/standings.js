import React from "react";
import "./standings.css";
import { StandingTable } from "../../table/table";

export function Standings() {
  return (
    <div className="Standings">
      <div className="standing-all">
      <div className="leagues">
        <select className="leagues-select">
          <option>La Liga</option>
          <option>Champions League</option>
        </select>
      </div>
      <StandingTable logoColWdt={'10%'} wdt={'55%'} width={'80%'}/>
      </div>

    </div>
  );
}
