import React from 'react';

var that;
export class InputArea extends React.Component {
    constructor(){
        super();
        this.state = {
            title: '',
            type: '',
            year: ''
        }

        that = this;
    }
    titleChanged(e){
        that.setState({
            title: e.target.value
        });
        that.props.getMovies(e.target.value, 
            that.state.type, that.state.year)
    }
    typeChanged(e){
        that.setState({
            type: e.target.value
        });
        that.props.getMovies(that.state.title, 
            that.state.type, that.state.year)
    }
    yearChanged(e){
        that.setState({
            year: e.target.value
        });
        that.props.getMovies(that.state.title, 
            that.state.type, that.state.year)
    }
    render(){
        return (
            <div className="inputArea form-group">
            <h3>Title</h3> 
              <input className="form-control col-xs-4" onChange={that.titleChanged} value={that.state.title}></input>
              {/* <label>Type</label> 
              <input onChange={that.typeChanged} value={that.state.type}></input>
              <label>Year</label> 
              <input onChange={that.yearChanged} value={that.state.year}></input> */}
            </div>
          );
    }
}