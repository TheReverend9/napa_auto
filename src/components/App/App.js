//Kevin Blackmon
//11.19.2023

import {
  Route, Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import './App.css';
import Home from "../Home/Home.js";
import Search from "../Search/Search.js";
import Offer from "../Offer/Offer.js";

function App() {
  return (
    <HashRouter>
      <div className="container">
        <ul className="A-header">
          <li><h1 id="A-h1">Napa Auto Parts</h1></li>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/search">Search</NavLink></li>
          <li><NavLink to="/offer">Offer</NavLink></li>
        </ul>
        <div className="content">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/offer" element={<Offer/>}/>
            </Routes>
        </div>
        <div className="Footer">
            <p>Thanks for utilizing the new and improved NAPA Auto Website!</p>
            <p>Updated: 11/26/2023</p>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
