import React from "react";
import "./table.css"
import logo from "./images/logo.png";
import { Table } from "react-bootstrap";

export function StandingTable( props){
    return(
        <div>
            <Table className="stnd-table" style={{width: props.width}}>
          <thead>
            <tr>
              <th colSpan={3}>Pos.</th>
              <th>Pts</th>
              <th>P</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pos-col">1</td>
              <td className="logo-col" style={{width: props.logoColWdt}}>
                <img className="logo" src={logo} alt="logo" style={{width: props.wdt }}></img>
              </td>
              <td className="name-col">FKC</td>
              <td>5</td>
              <td>5</td>
              <td>0</td>
              <td>0</td>
              <td>8</td>
              <td>15</td>
            </tr>
            <tr>
              <td>2</td>
              <td className="logo-col" style={{width: props.logoColWdt}}>
                <img className="logo" src={logo} alt="logo" style={{width: props.wdt }}></img>
              </td>
              <td>FKC</td>
              <td>5</td>
              <td>5</td>
              <td>0</td>
              <td>0</td>
              <td>8</td>
              <td>15</td>
            </tr>
            <tr>
              <td>3</td>
              <td className="logo-col" style={{width: props.logoColWdt}}>
                <img className="logo" src={logo} alt="logo" style={{width: props.wdt }}></img>
              </td>
              <td>FKC</td>
              <td>5</td>
              <td>5</td>
              <td>0</td>
              <td>0</td>
              <td>8</td>
              <td>15</td>
            </tr>
            <tr>
              <td>4</td>
              <td className="logo-col" style={{width: props.logoColWdt}}>
                <img className="logo" src={logo} alt="logo" style={{width: props.wdt }}></img>
              </td>
              <td>FKC</td>
              <td>5</td>
              <td>5</td>
              <td>0</td>
              <td>0</td>
              <td>8</td>
              <td>15</td>
            </tr>
            <tr>
              <td>5</td>
              <td className="logo-col" style={{width: props.logoColWdt}}>
                <img className="logo" src={logo} alt="logo" style={{width: props.wdt }}></img>
              </td>
              <td>FKC</td>
              <td>5</td>
              <td>5</td>
              <td>0</td>
              <td>0</td>
              <td>8</td>
              <td>15</td>
            </tr>
          </tbody>
        </Table>
        </div>
    );
}