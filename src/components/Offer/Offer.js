import React, { Component } from "react";
import './Offer.css';


class Offer extends Component {
    render() {
        return(
            <div id="O-container">
                <div id="O-section1">
                    <div className="O-partlist" id="O-partlist1">
                        <ul className="O-list" id="O-list1">
                            <a className="O-color1" href="/">Belt Drive</a>
                            <a className="O-color2" href="/">Body & Lamp Assembly</a>
                            <a className="O-color1" href="/">Brake & Wheel Hub</a>
                            <a className="O-color2" href="/">Cooling System</a>
                            <a className="O-color1" href="/">Drivetrain</a>
                            <a className="O-color2" href="/">Electrical</a>
                            <a className="O-color1" href="/">Engine</a>
                            <a className="O-color2" href="/">Exhaust & Emission</a>
                        </ul>
                    </div>
                    <div className="O-partlist" id="O-partlist2">
                        <ul className="O-list" id="O-list2">
                            <a className="O-color2" href="/">Fuel & Air</a>
                            <a className="O-color1" href="/">Heat & Air Conditioning</a>
                            <a className="O-color2" href="/">Ignition</a>
                            <a className="O-color1" href="/">Interior</a>
                            <a className="O-color2" href="/">Steering</a>
                            <a className="O-color1" href="/">Suspension</a>
                            <a className="O-color2" href="/">Transmission</a>
                            <a className="O-color1" href="/">Wheel</a>
                        </ul>
                    </div>
                </div>
                <div id="O-section2">
                    <div id="O-search">
                        <button className="O-button">Year</button>
                        <button className="O-button">Make</button>
                        <button className="O-button">Model</button>
                        <button className="O-button" id="O-search-button">Search</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Offer;