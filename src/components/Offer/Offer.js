import React, { Component } from "react";
import Button from '../Themes/Button-Themes.js';
import './Offer.css';
import Link from '../Themes/Link-Themes.js';
import Div from '../Themes/Header-Themes.js';

class Offer extends Component {
    render() {
        return(
            <div id="O-outer-container">
                <Div className="O-header">
                    <br/>
                    <h2>What Napa Auto Parts can Offer you!</h2>
                    <br/>
                    <br/>
                </Div>
                <div className="O-b-header">
                    
                    <p>Choose a part group from the list below</p>
                    <p>OR</p>
                    <p>Search for a specific vehicle</p>
                </div>
                <div id="O-container">
                    <div id="O-section1">
                        <div className="O-partlist" id="O-partlist1">
                            <ul className="O-list" id="O-list1">
                                <Link className="O-color1" href="/">Belt Drive</Link>
                                <Link className="O-color2" href="/">Body & Lamp Assembly</Link>
                                <Link className="O-color1" href="/">Brake & Wheel Hub</Link>
                                <Link className="O-color2" href="/">Cooling System</Link>
                                <Link className="O-color1" href="/">Drivetrain</Link>
                                <Link className="O-color2" href="/">Electrical</Link>
                                <Link className="O-color1" href="/">Engine</Link>
                                <Link className="O-color2" href="/">Exhaust & Emission</Link>
                            </ul>
                        </div>
                        <div className="O-partlist" id="O-partlist2">
                            <ul className="O-list" id="O-list2">
                                <Link className="O-color2" href="/">Fuel & Air</Link>
                                <Link className="O-color1" href="/">Heat & Air Conditioning</Link>
                                <Link className="O-color2" href="/">Ignition</Link>
                                <Link className="O-color1" href="/">Interior</Link>
                                <Link className="O-color2" href="/">Steering</Link>
                                <Link className="O-color1" href="/">Suspension</Link>
                                <Link className="O-color2" href="/">Transmission</Link>
                                <Link className="O-color1" href="/">Wheel</Link>
                            </ul>
                        </div>
                    </div>
                    <div id="O-section2">
                        <div id="O-search">
                            <Button className="O-button">Year</Button>
                            <Button className="O-button">Make</Button>
                            <Button className="O-button">Model</Button>
                            <Button id="O-search-button">Search</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Offer;