import React, { Component } from "react";

// Code CoordinatesButton Component Here
export default class CoordinatesButton extends Component{

    theclick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render(){
        return(
            <button onClick={this.theclick}>Cord</button>
        )
    }
}