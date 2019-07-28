import React from 'react';
import {ImdbBar} from './imdbBar';
import notFound from './notfound.svg';

var that;
export class Result extends React.Component {
    constructor(){
        super();
        this.state = {
            currentYear: new Date().getFullYear()
        }

        that = this;
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps.movie);
    }
    render(){
        return (
            <div className="result">
                {that.props.movie.length !== 0 && that.props.movie.Response !== "False" ?(
                    <div id="movie">
                    <div className="col-sm-4">
                        <img src={that.props.movie.Poster} alt="error"></img>
                    </div>
                    <div className="col-sm-8">
                        <h2>{that.props.movie.Title}</h2>
                        <p>{that.props.movie.Genre} <b>Lenght: {that.props.movie.Runtime}</b></p>
                        <h3>{that.props.movie.Year}</h3>
                        <h4>{that.props.movie.Actors}</h4>
                        <p>{that.props.movie.Plot}</p>
                        <div className="bold">IMDB rating:</div><p>{that.props.movie.imdbRating}</p>
                        <ImdbBar rating={that.props.movie.imdbRating}></ImdbBar>
                        <div className="bold">Oscars</div><p>{that.props.movie.Awards}</p>
                    </div>
                    
                    <hr></hr>
                </div>
                ):(
                    <div className="notFoundBox">
                        <img className="notFound" src={notFound} alt="error"></img>
                    </div>
                )
                }
            </div>
        );
    }
}