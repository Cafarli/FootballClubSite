import React, {  useState } from "react";
import "./standings.css";
import { StandingTable } from "../../../Components/table/table";

export function Standings() {
  const [league, setLeague] = useState('Premyer Liq')

  return (
    <div className="Standings">
      <div className="standing-all">
      <div className="leagues">
        <select onChange={e=> setLeague(e.target.value)} className="leagues-select">
          <option>Premyer Liq</option>
          <option>Champions League</option>
        </select>
      </div>
      <StandingTable teamSize={league==="Premyer Liq"? 5 : 14} width={'75%'} wdt={'30%'} />
      </div>

    </div>
  );
}
