import React from 'react';
import fetchJsonp from 'fetch-jsonp';
import Popup from "reactjs-popup";

const movieApiUrl = 'https://www.myapifilms.com/imdb/top?start=1&end=30&token=d721e2ff-7ae8-4467-8767-45179f21372f&format=json&data=0';

var that;
export class TopList extends React.Component {
    constructor(){
        super();
        this.state = {
            list: []
        }

        that = this;
    }
    async componentDidMount(){
        var url = movieApiUrl;
        await fetchJsonp(url,{
            dataType: 'jsonp'
        })    
        .then((response) => response.json())
        .then((responseJSON) => {
           // do stuff with responseJSON here...
           console.log(responseJSON);
           that.setState({
            list: responseJSON
          });
        })
      }
    render(){
        if(that.state.list.length === undefined){
            var list = that.state.list.data.movies.map((item, i) => {
                return <div key={i} className="listItem"><h2>{i+1}</h2>  <Popup trigger={<button> <img src={item.urlPoster}></img></button>} position="right center"><div><img className="mainImg" src={item.urlPoster}></img></div></Popup><h3>{item.title}</h3><div className="meta"><div className="bold">Rating: </div>{item.rating} <div className="bold">Year: </div>{item.year}</div></div>;
              });
            return (
                <div className="container list"> 
                  {list}
                </div>
              );
        }else{
            return(
                <div></div>
            )
        }
            
    }
}

