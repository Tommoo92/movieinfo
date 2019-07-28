import React from 'react';
import {InputArea} from './inputarea';
import{Result} from './result';

const movieApiUrl = 'http://www.omdbapi.com/?apikey=c6bb64dc';

var that;
export class Container extends React.Component {
    constructor(){
        super();
        this.state = {
            movie: []
        }

        that = this;
    }
    async getMovies(title, type, year){
        var url = movieApiUrl + '&t='+title+'&plot=full';
        await fetch(url)    
        .then((response) => response.json())
        .then((responseJSON) => {
           // do stuff with responseJSON here...
           console.log(responseJSON);
           that.setState({
            movie: responseJSON
          });
        })
      }
    render(){
        return (
            <div className="container"> 
              <InputArea getMovies={that.getMovies}>
              </InputArea>
              <Result movie={that.state.movie}>

              </Result>
            </div>
          );
    }
}

