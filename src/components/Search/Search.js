import React, { Component } from "react";
import './Search.css';
import ad1 from './oil.jpg';
import ad2 from './filter.jpg';
import ad3 from './tires.jpg';

class Search extends Component {
    render() {
        return(
            <div id="S-container">
                <div id="S-search">
                    <form id="S-form">
                        <input id="submit" type="submit" value="Submit"/>
                        <input id="form-input" placeholder="Enter a part name or number here" type="text" name="search"/>
                    </form>
                </div>
                <div id="S-ads">
                    <div className="S-ad" id="ad1">
                        <img src={ad1} alt="oil containers"/>
                        <button>Find Oil</button>
                    </div>
                    <div className="S-ad" id="ad2">
                        <img src={ad2} alt="oil filter"/>
                        <button>Find Filters</button>
                    </div>
                    <div className="S-ad" id="ad3">
                        <img src={ad3} alt="new tires"/>
                        <button>Find Tires</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;