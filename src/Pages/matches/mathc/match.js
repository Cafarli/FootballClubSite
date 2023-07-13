import React from "react";
import './match.css';
import { Table } from "react-bootstrap";
import { MdLocationOn } from 'react-icons/md';

export function Match() {
    return(
        <div className="Match">
            <div className="bg-image"></div>
            <h1>MATCHES</h1>
            <Table className="games" >
                <tbody>
                    <tr>
                        <td className="date"><span className="day"> 24</span> Nov</td>
                        <td className="score">ENGLAND <span>2 : 0</span> AMSTERDAM</td>
                        <td className="location"><MdLocationOn className="icon" />Cambridgeshire UK</td>
                    </tr>
                    <tr>
                        <td className="date"><span className="day"> 24</span> Nov</td>
                        <td className="score">ENGLAND <span>2 : 0</span> AMSTERDAM</td>
                        <td className="location"><MdLocationOn className="icon" />Cambridgeshire UK</td>
                    </tr>
                    <tr>
                        <td className="date"><span className="day"> 24</span> Nov</td>
                        <td className="score">ENGLAND <span>2 : 0</span> AMSTERDAM</td>
                        <td className="location"><MdLocationOn className="icon" />Cambridgeshire UK</td>
                    </tr>
                    <tr>
                        <td className="date"><span className="day"> 24</span> Nov</td>
                        <td className="score">ENGLAND <span>2 : 0</span> AMSTERDAM</td>
                        <td className="location"><MdLocationOn className="icon" />Cambridgeshire UK</td>
                    </tr>
                    <tr>
                        <td className="date"><span className="day"> 24</span> Nov</td>
                        <td className="score">ENGLAND <span>2 : 0</span> AMSTERDAM</td>
                        <td className="location"><MdLocationOn className="icon" />Cambridgeshire UK</td>
                    </tr>
                    <tr>
                        <td className="date"><span className="day"> 24</span> Nov</td>
                        <td className="score">ENGLAND <span>2 : 0</span> AMSTERDAM</td>
                        <td className="location"><MdLocationOn className="icon" />Cambridgeshire UK</td>
                    </tr>
                    <tr>
                        <td className="date"><span className="day"> 24</span> Nov</td>
                        <td className="score">ENGLAND <span>2 : 0</span> AMSTERDAM</td>
                        <td className="location"><MdLocationOn className="icon" />Cambridgeshire UK</td>
                    </tr>
                </tbody>
            </Table>

        </div>
    );
}