import React from "react";
import Table from "react-bootstrap/Table";
import "./player.css";
import { Container, Col, Row } from "react-bootstrap";
import gk1 from "../players/images/player.png";
import bg from "../../../Images/backgroundImages/stadium.png";

export function Player() {
  return (
    <Container className="Player">
      <div className="player-info" style={{backgroundImage:`url('${bg}')`}} >
        <Row style={{ paddingBottom: "7%", marginBottom: "4%" }}>
          <Col lg={5} md={5}>
            <div className="player-img">
              <img src={gk1} alt=""></img>
            </div>
          </Col>

          <Col lg={7} md={7}>
            <div className="personal-info">
              <h3>Player Player</h3>
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
                  <p>Azerbaijan</p>
                </li>
                <li>
                  <p>01.01.1994</p>
                </li>
                <li>
                  <p>1.92 m</p>
                </li>
                <li>
                  <p>65 kg</p>
                </li>
                <li>
                  <p>Attacker</p>
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
                <tr>
                  <td>Jabrayil FC</td>
                  <td> 2020-</td>
                </tr>
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
              <li>Minutes</li>
            </ul>
            <ul>
              <li>
                <span>0</span>
              </li>
              <li>
                <span>0</span>
              </li>
              <li>
                <span>0</span>
              </li>
              <li>
                <span>0</span>
              </li>
            </ul>
          </div>
        </Col>

        <Col md={4}>
          <div className="honours">
            <h3>Honours</h3>
            <ul>
              <li>Premier league</li>
            </ul>

            <ul>
              <li>
                <span>3</span>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
