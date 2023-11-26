import React, { Component } from "react";
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import './Home.css';
import Div from '../Themes/Header-Themes.js';
import tire from './tire.png';

const rotate = keyframes`
from {
    transform: rotate(0deg);
}

to {
    transform: rotate(360deg);
}`;

const Rotate = styled.div`
display: inline-block;
animation: ${rotate} 5s linear infinite;
padding: 2rem 1rem;
`;

class Home extends Component {
    render() {
        return(
            <div id="H-container">
                <Div className="H-header">
                    <br/>
                    <h2>Welcome To Napa Auto Parts</h2>
                    <br/>
                    <br/>
                </Div>
                <p>Here at Napa Auto Parts we provide reliable and affordable parts 
                    and tools that fit any need. Our Parts Professional Team Members 
                    stand ready to provide the best service you can find at any parts store.
                    Stop on in today and let us help with your next project!
                </p>
                <br/>
                <Rotate><a href="https://www.freeiconspng.com/img/458"><img src={tire} alt="Rotating Tire"/></a></Rotate>
                <br/>
                <p id="H-slogan"><i>"NAPA KNOW HOW"</i></p>

                <p>Stop in today or call ahead at <a href='/'>1-800-555-5555</a></p>
            </div>
        );
    }
}

export default Home;