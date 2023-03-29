import React from "react";
import Table from 'react-bootstrap/Table';
import "./player.css";
import { Container, Col, Row } from "react-bootstrap";
import gk1 from '../players/images/Şahruddin_Məhəmmədəliyev1-203x265.png'

export function Player() {
  return (
    <Container className="Player">
        <div className="player-info">
      <Row md={5} style={{ paddingBottom: "5% " }}>
        <Col>
          <div className="player-img">
            <img src={gk1} alt=""></img>
          </div>
        </Col>

        <Col md={7}>
          <div className="personal-info">
            <h3>Şahruddin Məhəmmədəliyev</h3>
            <ul>
              <li><p>Nationality:</p></li>
              <li><p>Birth Date:</p></li>
              <li><p>Height:</p></li>
              <li><p>Weight:</p></li>
              <li><p>Position:</p></li>
            </ul>

            <ul>
              <li><p>Azərbaycan</p></li>
              <li><p>01.01.1994</p></li>
              <li><p>1.92 m</p></li>
              <li><p>65 kq</p></li>
              <li><p>Hücumçu</p></li>
            </ul>
          </div>
        </Col>
      </Row>
        </div>

      <Row style={{ paddingBottom: "5% " }}>
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
                  <td>Football FK</td>
                  <td> 2015-</td>
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

        <Col>
          <div className="honours">
            <h3>Honours</h3>
            <ul>
              <li>Premier league</li>
              <li>Premier league </li>
            </ul>

            <ul>
              <li>
                <span>3</span>
              </li>
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
