import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

var that = this;
export class ImdbBar extends React.Component{
    constructor(props){
        super(props);

        var rating = parseInt(this.props.rating) * 10;
        this.state = {
            rating: rating
        }

        that = this;
    }

    componentWillReceiveProps(nextProps){
        var rating = parseInt(nextProps.rating) * 10;
        that.setState({
            rating: rating
        });
    }
  
    render(){
        return(
            <div>
                <ProgressBar now={that.state.rating} />
            </div>
        );
    }
}