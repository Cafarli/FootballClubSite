import React from "react";
import Table from "react-bootstrap/Table";
import "./player.css";
import { Container, Col, Row } from "react-bootstrap";
import playersdata from "../../../Data/players.json";
import historyData from "../../../Data/playersCareer.json";
import gk1 from "../players/images/player.png";
import bg from "../../../Images/backgroundImages/stadium.png";
import { useParams } from "react-router";

export function Player() {
  const { playerName } = useParams();
  const player = playersdata.players.filter((p) => p.name === playerName)[0];
  const career = historyData.players.filter((p) => p.fid === player.fid)[0];

  career.clubs.map((c, ind) => {
    return console.log(c[0]);
  });

  return (
    <Container className="Player">
      <div className="player-info" style={{ backgroundImage: `url('${bg}')` }}>
        <Row style={{ paddingBottom: "7%", marginBottom: "4%" }}>
          <Col lg={5} md={5}>
            <div className="player-img">
              <img src={gk1} alt=""></img>
            </div>
          </Col>

          <Col lg={7} md={7}>
            <div className="personal-info">
              <h3>{player.name}</h3>
              <ul>
                <li>
                  <p>Nationality:</p>
                </li>
                <li>
                  <p>Birth date:</p>
                </li>
                <li>
                  <p>Height:</p>
                </li>
                <li>
                  <p>Weight:</p>
                </li>
                <li>
                  <p>Position:</p>
                </li>
              </ul>

              <ul>
                <li>
                  <p>{player.nationality}</p>
                </li>
                <li>
                  <p>{player.birthdate}</p>
                </li>
                <li>
                  <p>{player.height}</p>
                </li>
                <li>
                  <p>{player.weight}</p>
                </li>
                <li>
                  <p>{player.position}</p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>

      <Row className="playerAddInfo" style={{ paddingBottom: "10% " }}>
        <Col md={4}>
          <div className="player-history">
            <h3>Club History</h3>
            <Table className="history-table">
              <thead>
                <tr>
                  <th>Club</th>
                  <th>Season</th>
                </tr>
              </thead>
              <tbody>
                {career &&
                  career.clubs.map((c, ind) => {
                    return (
                      <tr key={ind}>
                        <td>{c[0]}</td>
                        <td> {c[1]}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </div>
        </Col>

        <Col md={4}>
          <div className="statistics">
            <h3>Statistics</h3>
            <ul>
              <li>Games</li>
              <li>Goals</li>
              <li>Passes</li>
            </ul>
            <ul>
              <li>
                <span>{career.games}</span>
              </li>
              <li>
                <span>{career.goals}</span>
              </li>
              <li>
                <span>{career.passes}</span>
              </li>
            </ul>
          </div>
        </Col>

        <Col md={4}>
          <div className="honours">
            <h3>Honours</h3>
            <ul>
            {!!career &&
                career.honours.map((h, ind) => {
                  return (
                    <li>
                      <span>{h[0]}</span>
                    </li>
                  );
                })}
            </ul>

            <ul>
              {!!career &&
                career.honours.map((h, ind) => {
                  return (
                    <li>
                      <span>{h[1]}</span>
                    </li>
                  );
                })}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
