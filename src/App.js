import React from 'react';
import { BrowserRouter as Router, Route, Link } from "../node_modules/react-router-dom";
import './style/css/app.css';
import {Menu} from './menu';
import {Container} from './container';
import {TopList} from './toplist';

function App() {
  return (
    <Router>
          <div className="App"> 
      <Menu>

      </Menu>
      <Route path="/" exact component={Container} />
      <Route path="/toplist" component={TopList} />
    </div>
    </Router>
  );
}

export default App;
