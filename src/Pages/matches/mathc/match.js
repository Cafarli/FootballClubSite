import React from "react";
import "./match.css";
import { Table } from "react-bootstrap";
import data from "../../../Data/matches.json";
import MatchLine from "./matchLine";

export function Match() {
  return (
    <div className="Match">
      <div className="bg-image"></div>
      <h1>MATCHES</h1>
      <Table className="games">
        {data.mathches &&
          !!data.mathches.length &&
          data.mathches.map((match, index) => {
            return (
              <MatchLine key={index} match={match} />
            );
          })}
      </Table>
    </div>
  );
}
