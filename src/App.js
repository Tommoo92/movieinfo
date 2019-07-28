import React from 'react';
import { BrowserRouter as Router, Route, Link } from "../node_modules/react-router-dom";
import './style/css/app.css';
import {Container} from './container';
import {TopList} from './toplist';
import mySvg from './movie.svg';

function App() {
  return (
    <Router>
      <div className="App"> 
        <div id="menu">
              <div>MovieInfo</div>
              <img className="icon" src={mySvg} alt="error"></img>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Search</Link></li>
                <li><Link to="/toplist">Toplist</Link></li>
              </ul>
          </div>
      
          <Route path="/" exact component={Container} />
          <Route path="/toplist" component={TopList} />
      </div>
    </Router>
  );
}

export default App;
