import React, { Component } from "react";
import './Home.css';

class Home extends Component {
    render() {
        return(
            <div id="H-container">
                <h2>Welcome To Napa Auto Parts</h2>
                <p>Here at Napa Auto Parts we provide reliable and affordable parts 
                    and tools that fit any need. Our Parts Professional Team Members 
                    stand ready to provide the best service you can find at any parts store.
                    Stop on in today and let us help with your next project!
                </p>
                <p id="H-slogan"><i>"NAPA KNOW HOW"</i></p>

                <p>Stop in today or call ahead at <a href='/'>1-800-555-5555</a></p>
            </div>
        );
    }
}

export default Home;