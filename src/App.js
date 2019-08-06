import React from 'react';
import { BrowserRouter as Router, Route, Link } from "../node_modules/react-router-dom";
import './style/css/app.css';
import {Container} from './container';
import {TopList} from './toplist';
import mySvg from './movie.ico';
import {changeColor} from './actions/colorActions';
import { connect } from "react-redux";
import {$} from 'jquery'; 

var that;
class ConnectedApp extends React.Component {
  constructor(){
    super();

    this.state = {
      color: 'yellow'
    }

    that = this;
  }
  changeColor(e){
    var color = e.target.value;

    if(color === 'yellow'){
      var payload = {
        value: 'yellow'
      }
      that.props.onColorChange(payload);
      that.setState({
        color: 'yellow'
      })

    }else{
      var payload = {
        value: 'purple'
      }
      that.props.onColorChange(payload);
      that.setState({
        color: 'purple'
      })
    }
  }
  render(){
    return (
        <Router>
          <div className="App"> 
            <div id="menu" className="yellow">
                  <div id="upper">
                    <div>MovieInfo  </div> <img className="icon" src={mySvg} alt="error"></img>                   
                    <select value={this.state.color} onChange={this.changeColor}>
                        <option value="yellow">Yellow</option>
                        <option value="purple">Purple</option>
                    </select>
                  </div>
                  <div id="lower">
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/">Search</Link></li>
                      <li><Link to="/toplist">Toplist</Link></li>
                    </ul>
                  </div>
              </div>
          
              <Route path="/" exact component={Container} />
              <Route path="/toplist" component={TopList} />
          </div>
        </Router>
    );
  }
}

const mapStateToProps = state =>  ({
  color: state.color
});

const mapActionsToProps = {
  onColorChange: changeColor
}

const App = connect(mapStateToProps, mapActionsToProps)(ConnectedApp);

export default App;
