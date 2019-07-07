import React from 'react';
import fetchJsonp from 'fetch-jsonp';

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
        var data = await fetchJsonp(url,{
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
            let list = that.state.list.data.map((item, i) => {
                return (
                  <div key={i}>
                    {item.title}
                  </div>
                );
              });
            return (
                <div className="container"> 
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

