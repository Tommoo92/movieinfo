import React from 'react';
import mySvg from './movie.svg';

export class Menu extends React.Component{
    render(){
        return(
            <div id="menu">
                <div>MovieInfo</div>
                <img className="icon" src={mySvg}></img>
            </div>
        );  
    }
}

