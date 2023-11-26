import React, { Component } from "react";
import Button from '../Themes/Button-Themes.js';
import Div from '../Themes/Header-Themes.js';
import "./Search.css";
import ad1 from './oil.jpg';
import ad2 from './filter.jpg';
import ad3 from './tires.jpg';

class Search extends Component {
    render() {
        return(
                <div id="S-container">
                    <Div className="S-header">
                        <br/>
                        <h2>Search the Website from here</h2>
                        <br/>
                        <br/>
                    </Div>
                    <div id="S-search">
                        <form id="S-form">
                            <Button id="submit" type="submit" value="Submit">Submit</Button>
                            <input id="form-input" placeholder="Enter a part name or number here" type="text" name="search"/>
                        </form>
                    </div>
                    <div id="S-ads">
                        <div className="S-ad" id="ad1">
                            <img src={ad1} alt="oil containers"/>
                                <Button>Find Oil</Button>
                        </div>
                        <div className="S-ad" id="ad2">
                            <img src={ad2} alt="oil filter"/>
                            <Button>Find Filters</Button>
                        </div>
                        <div className="S-ad" id="ad3">
                            <img src={ad3} alt="new tires"/>
                            <Button>Find Tires</Button>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Search;