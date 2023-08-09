import React from "react";
import "./table.css";
import logo from "./images/logo.png";
import { Table } from "react-bootstrap";
import teams from "./liga.json";

export function StandingTable(props) {
  return (
    <div>
      <Table className="stnd-table" style={{width: props.width}}>
        <thead>
          <tr>
            <th className="pos" colSpan={2}>Pos.</th>
            <th className="pts">PTS</th>
            <th className="p">P</th>
            <th className="win">W</th>
            <th className="draw">D</th>
            <th className="los">L</th>
            <th className="gd">GD</th>
          </tr>
        </thead>
        <tbody>
          {teams.lig.filter((t,ind)=> ind<props.teamSize).map((team, index) => {
            return (
              <tr key={index}>
                <td className="pos-col">{index+1}</td>
                <td className="name-col">
                  <img
                    className="logo" style={{width: props.wdt }}
                    src={logo}
                    alt="logo"
                  />{team.teamName}</td>
                <td className="pts-col">{team.pts}</td>
                <td className="p-col">{team.p}</td>
                <td className="win-col">{team.win}</td>
                <td className="draw-col">{team.draw}</td>
                <td className="los-col">{team.lose}</td>
                <td className="gd-col">{team.goalDif}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
